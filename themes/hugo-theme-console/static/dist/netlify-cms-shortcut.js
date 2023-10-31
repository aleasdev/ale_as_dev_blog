CMS.registerEditorComponent({
    id: "image-processed",
    label: "Image Processed",
    fields: [{
            name: "title",
            label: "Title",
            widget: "string"
        },
        {
            name: "src",
            label: "Image Source",
            widget: "image"
        },
    ],
    pattern: /{{< imgh src="([a-zA-Z0-9-_ ]+)" alt="([a-zA-Z0-9-_ ]+)" >}}/,
    fromBlock: function(match) {
        return {
            title: match[1],
            src: match[2],
        };
    },
    toBlock: function(obj) {
        return `{{< imgh src="${obj.src}" alt="${obj.title}" >}}`;
    },
    toPreview: function(obj) {
        return `<figure><img src=${obj.src} alt=${obj.title}><figcaption>${obj.title}</figcaption></figure>`;
    },
});