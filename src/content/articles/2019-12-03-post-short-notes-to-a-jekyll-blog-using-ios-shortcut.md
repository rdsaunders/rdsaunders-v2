---

title: Post short notes to a Jekyll blog using an iOS Shortcut
excerpt: A shortcut I created to post short notes to my website using iOS Shortcut
  app and the GitHub API.
date: 2019-12-03T00:00:00.000+00:00
categories:
- Indieweb
tags:
- Netlify
- iOS Shortcut
- Jekyll
- GitHub API
- GitHub
- Indieweb

---
As I take steps to host all my content to my site first, I wanted to start adding notes and eventually push these to Twitter.

The [Indieweb](https://indieweb.org/note) defines a note as:

> A note is a post that is typically short unstructured plain text, written & posted quickly, that has its own permalink page. Creating, publishing, and owning your own notes is a key step towards reducing dependence on Twitter.

I recently created an iOS shortcut to post a photo to the photos section of my site. In the same vain this post outlines another iOS shortcut that I created to post a short note.

## Note collection

As this site is currently built using Jekyll, I setup a new collection called notes that would be available at www.rdsaunders.co.uk/notes.

Each note is based on the time stamp that its is created to provide a unique URL that can eventually be posted to Twitter or shared elsewhere. Once the collection was setup and I had a listing to display all the notes I set about creating a note shortcut.

## iOS Shortcut

This shortcut is a relatively simple one. The main effort was creating the file name from the current date/time stamp. The shortcut takes advantage of the [GitHub API](https://developer.github.com/v3/repos/contents/#create-or-update-a-file) to submit the note directly to my repo on GitHub.

I’m using Netlify to build and host my site so once the note is committed, [Netlify](https://www.netlify.com/) sees the changes in my repository then builds and deploys the changes.

You can download a copy of the [iOS Shortcut](https://www.icloud.com/shortcuts/63116bd5272d415199f3805d65e85bca) for yourself. When installing the shortcut you’ll need to configure it with your own GitHub credentials.

## Prerequisites

* **GitHub username** – used to authenticate to the GitHub API
* **GitHub repository name** – the repository you are uploading to.
* **GitHub personal access token** – this must have read/write access to the appropriate repository. View the [Github docs](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) to find out how to create a access token.
* **GitHub committer** **name** and **email address** – used when committing files to the repository.
* **Note upload path** – where the markdown file should be created e.g. _notes.

## What the shortcut does

1. The shortcut asks you: What do you want to say? This text is used as the note.
2. Uses the current date and time to generate a unique filename e.g 201912302911.md.
3. BASE 64 encodes the text to send to GitHub.
4. Creates and uploads a markdown file containing the date, and the notes text via the GitHub API.

## Yaml front matter structure

<table class="striped">
    <caption>A table explaining how the front matter is populated</caption>
    <tr>
        <th>Front matter field</th>
        <th>Data population</th>
    </tr>
    <tr>
        <td>date</td>
        <td>Uses the creation date of the note.</td>
    </tr>
    <tr>
        <td>content</td>
        <td>The note text is used in the primary content area of the markdown file.</td>
    </tr>
</table>

## Notes / quirks

* The shortcut relies on access to [https://shrtcts.app/](https://shrtcts.app/) to use some of the date / string utilities.