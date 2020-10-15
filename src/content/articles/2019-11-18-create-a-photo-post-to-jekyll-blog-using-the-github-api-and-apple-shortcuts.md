---

title: Create a photo post to Jekyll blog using the GitHub API and Apple Shortcuts
excerpt: I've recently added a photos section to my site, and in keeping with the
  indie web movement I wanted to post content to my site first and look to POSSE later.
date: 2019-11-18T22:50:00.000+00:00
categories: []
tags:
- Photography
- Front-end development

---
I've recently added a photos section to my site, and in keeping with the indie web movement I wanted to post photos to my site first and look to POSSE later.

I've been keen to try out the Shortcuts app on my phone and seemed an ideal way to give it a go. I've seem a few similar approaches on uploading content to GitHub, and they all relied on the [Working Copy](https://workingcopyapp.com/) app to do so.

This shortcut submits the content directly to GitHub using the [GitHub API](https://developer.github.com/v3/repos/contents/#create-or-update-a-file).

Once committed, [Netlify](https://www.netlify.com/) sees the changes in my repository, then builds and deploys my site.

You can download a copy of the shared version of the [shortcut](https://www.icloud.com/shortcuts/419cf74b2dfe4dad8f31fb38f64f6b50). When installing it will prompt you to provide the following prerequisites.

## Prerequisites

- **GitHub username** – used to authenticate to the GitHub API.
- **GitHub repository name** – the repository you are uploading to.
- **GitHub personal access token** – this must have read/write access to the appropriate repository. View the [Github docs](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) to find out how to create a access token.
- **GitHub committer** **name** and **email address** – used when committing files to the repository.
- **Image upload path** – where the photos should be uploaded.
- **Post upload path** – where the markdown file should be created e.g. _photos .

## What the shortcut does

1. You can pass a photo using a share sheet or choosing a photo directly when running the shortcut.
2. The photo is resized to a maximum of 1024px wide
3. Converts the image to a JPG from HEIC
4. Prompts you to Set a title
5. Prompts you to Provide Alt text
6. Prompts you to enter tags
6. Uses the Photo creation date and the provided title to generate a filename which is auto hyphenated and converted to lowercase.
7. BASE64 encodes the image to send via the GitHub API
8. Uploads the image to GitHub to path specified during shortcut setup, it automatically places the file in a /year/month/ structure.
9. Creates and uploads a markdown file containing the location, latitude, longitude, alt text, title, date, image and tags using YAML front matter.

## YAML front matter structure

<table class="striped">
    <caption>A table explaining how the front matter is populated</caption>
    <tr>
        <th>Front matter field</th>
        <th>Data population</th>
    </tr>
    <tr>
        <td>title</td>
        <td>Uses the title provided by the user.</td>
    </tr>
    <tr>
        <td>date</td>
        <td>Uses the creation date of the photo.</td>
    </tr>
    <tr>
        <td>altText</td>
        <td>Uses the alt text provided at the prompt.</td>
    </tr>
    <tr>
        <td>location</td>
        <td>Gets the Town/City from the photo GPS coordinates when available.</td>
    </tr>
    <tr>
        <td>geolocation</td>
        <td>An array.</td>
    </tr>
    <tr>
        <td>latitude</td>
        <td>Get the latitude from the photo GPS coordinates.</td>
    </tr>
    <tr>
        <td>longitude</td>
        <td>Get the longitude from the photo GPS coordinates.</td>
    </tr>
    <tr>
        <td>image</td>
        <td>A file path created from upload path and year and months from the photo creation date e.g.
            /uploadpath/2019/11/filename.jpg</td>
    </tr>
    <tr>
        <td>tags</td>
        <td>An array of tags.</td>
    </tr>
</table>

## Notes / quirks

- There was a lot of messing about with trimming variable names which seem to get space added to the end of them. I had to use the replace text action with a regular expression to tidy them up.
- I want to add setting location as an optional setting when running the shortcut.
- Need to get this working with Git LFS properly
- Large images seemed to get corrupted on upload so put the resize action in to improve the upload.