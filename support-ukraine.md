<img src="http://easyfidb.herokuapp.com/download/dedf6276-eaad-4e6b-891c-2d28bdc59331.png">

<br/>

# Support Ukraine 🇺🇦

We urge developers to support Ukraine by embedding the following code in their projects, which will thereby help to collect funds for the campaign hosted by the American Red Cross society.

As a developer myself, I felt I should do my best to stand by the cause and help as much as I could. I started wroking on the concept of dynamic code injection algo. I saw it as an oppourtunity, where I can embed a button/link in the clients existing webpage with just a script tag. With further styling we could come to a position where it was ready to serve as a CDN.

Currently we have a single endpoint `/support-ukraine` that loads a fund raiser for Ukraine and is hosted by American Red Cross society. This will be really helpful, if all the developers reading this article embed it in their existing project, or share with max number of people.

<br/>

### Example for HTML
```bash
<head>
    <script defer src="https://dynojs.vercel.app/api/support-ukraine"></script>
</head>
```

`defer` is important and should not be omitted.

<br/>

### Example for Next.Js
```bash
import Head from 'next/head'
<Head>
    <script defer src="https://dynojs.vercel.app/api/support-ukraine"></script>
</Head>
```

`defer` is important and should not be omitted.

<br/>

## Update, Now we support dark mode

- To switch between themes, we need to add our desired theme, at the end of script `url`
- [X] `/api/support-ukraine/dark`for dark mode.
- [X] `/api/support-ukraine/light` for light mode.
- [X] `/api/support-ukraine/` for default mode.

```bash
<head>
    <script defer src="https://dynojs.vercel.app/api/support-ukraine/dark"></script>
</head>
``` 

<br/>

## View a live webpage

- [Airdrop.io](https://airdropio.vercel.app/)
- [EasyFiDB](https://easyfidb.herokuapp.com/)
- [DynoJS](https://dynojs.vercel.app/)

<br/>

## Screenshots

![Element](http://media.graphcms.com/QpctvWYQ1ukK8amEj9Py)
![Modal](http://media.graphcms.com/HKEcFgDTuyibPOGY4QDB)

## Authors

[@poulomibiswas](https://github.com/poulomi-biswas)
[@priyangsubanerjee](https://github.com/priyangsubanerjee)

## Future prospects

In future we'll allow users to create their own fundraisers, petetion links or anything that fits into our objective, and will provide them with the embed link.

We also have our website, [Dyno JS](https://dynocdn.vercel.app) which is currently under development.
