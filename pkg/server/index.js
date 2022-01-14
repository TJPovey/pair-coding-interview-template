const express = require('express')
const path = require('path');
const fs = require('fs');

const app = express()
const port = 3000

const cardsTable = {
    "3ffbd5ddcd2ae57a4f7ca82109fffe62": "The Ultimate Red Evil Dragon",
    "4ecc30c66c3c8eb5b7eb334ec2260644": "Elemental Hero Pluto",
    "6b1de44a679011089b49a27c7e311bd8": "Red-Eyes Magic Metal Force",
    "9dd5720e11cc5563b49f426248ccc03a": "Then Thousand Dragon",
    "17b09774229ba73d9a9a6da64be985e9": "Kolasi, Fantasma Del Fuego Infernal",
    "33a47387c43ab521595394e4b59ca299": "Chronograph Bahamut - The Cog of Time",
    "58d8dd89d3d1e5d6730c0c900425bd6d": "Elite Army General Mecassembled",
    "80a28441cd289f682a4322870543ef08": "Evil Hero Shining Inferno Wing",
    "196f9a04a5a7cfd05077847b56428855": "Twin Headed Savalo Dragon",
    "423b5e5e1bd03829c499596339c47ee0": "The Ultimate Comic Destruction Dragon",
    "861f3ee9eb65ab132f353c5ca8ff5d6b": "Chaos End Dragon",
    "cdb24823ac2b5a1803f059ebe9f8994d": "Grave-Dweller Sparta",
    "d4cfc13d90b301c7903b353160976eb4": "Blue-Eyes Chaos Max Dragon"
}

app.get('/cards', async (req, res) => {
    const mapped = Object.entries(cardsTable).map(([id, name]) => {
        console.log(id, name)
        return {
            id,
            name,
            price: (Math.random() * 100)
        }
    });

    return res.json(mapped);
})

app.get('/cards/:id/image', ({params}, res) => {
    const url = path.join(__dirname, `/assets/${params.id}.jpg`);
    fs.access(url, (error) => {
        if (error) {
            return res.status(404).send('Not found');
        }

        res.sendFile(url)
    })

})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})