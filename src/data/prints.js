import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name:'mooncalf'});

export default [
    { //
        title : "Avalon",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780301/nathanWalkerPhotography/prints/web_gallery_wides-4_nex7rf.jpg'),
        description : "",
        format : "wide",
        sizesPrices : {
            size: [[10,8],[17,11],[36,24]], // width x height
            price : ["50","125", "275"],
            sku : ['price_1LsXHuKcmnyYlZq3ijDYup2t','price_1LsXHuKcmnyYlZq3JnCEdwzm', 'price_1LsXHuKcmnyYlZq32trJl1We'] // Avalon
        },
    },
    { //
        title : "Power, Light, Rain",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780305/nathanWalkerPhotography/prints/web_gallery-7_phttvh.jpg'),
        description : "",
        format : "tall",
        sizesPrices : {
            size: [[8,10],[11,17],[24,36]], 
            price : ["50","125", "275"],
            sku : ['price_1LsWKkKcmnyYlZq35CBgcDh6', 'price_1L0s0nKcmnyYlZq3END3Yn3u', 'price_1L0s0nKcmnyYlZq3xTsCKS73'] // Power, Light, Rain
        },
    },
    { //
        title : "Over Under Blues",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780303/nathanWalkerPhotography/prints/web_gallery_wides-12_b0kikk.jpg'),
        description : "",
        format : "wide",
        sizesPrices : {
            size: [[10,8],[17,11],[36,24]], 
            price : ["50","125", "275"],
            sku : ['price_1LsXQBKcmnyYlZq3dfPwipIA', 'price_1LsXQBKcmnyYlZq3nSREXgiR', 'price_1LsXQBKcmnyYlZq3wKh5ccyJ'] // Over Under Blues
        },
    },
    { //
        title : "The Emperor's New Clothes",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1663174033/nathanWalkerPhotography/theEmperor_ausbcq.jpg'),
        description : "",
        format : "tall",
        sizesPrices : {
            size: [[8,10],[11,17],[24,36]], 
            price : ["50","125", "275"],
            sku : ['price_1LsXT7KcmnyYlZq38AaBEXkW', 'price_1LsXT7KcmnyYlZq3YyZMTvb0', 'price_1LsXT7KcmnyYlZq3TfBI5bi0'] // The Emperor's New Clothes
        },
    },
    { //
        title : "Acrossroads",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780303/nathanWalkerPhotography/prints/web_gallery_wides-9_dvfc5g.jpg'),
        description : "",
        format : "wide",
        sizesPrices : {
            size: [[10,8],[17,11],[36,24]], 
            price : ["50","125", "275"],
            sku : ['price_1LsXf7KcmnyYlZq3xuTabyYj','price_1L0s97KcmnyYlZq3uOzsftzA','price_1L0s97KcmnyYlZq3vQYZwDRZ'] // Acrossroads
        },
    },
    { //
        title : "Lots of Western Auto",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780302/nathanWalkerPhotography/prints/web_gallery_wides-7_x9dpbs.jpg'),
        description : "",
        format : "wide",
        sizesPrices : {
            size: [[8,10],[11,17],[24,36]], 
            price : ["50","125", "275"],
            sku : ['price_1LsXXhKcmnyYlZq364vUcvTt','price_1L0sPeKcmnyYlZq3TdHobgpX','price_1L0sPeKcmnyYlZq3xmLfggkD'] // Lots of Western Auto
        },
    },

    { //
        title : "Better Together",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780305/nathanWalkerPhotography/prints/web_gallery-6_vzsuux.jpg'),
        description : "",
        format : "tall",
        sizesPrices : {
            size: [[8,10],[11,17],[24,36]], 
            price : ["50","125", "275"],
            sku : ['price_1LtzJkKcmnyYlZq3hvMajgsI','price_1LtzJkKcmnyYlZq3aWKgdUtk','price_1LtzJkKcmnyYlZq3kHZa9aoW'] // Better Together
        },
    },
    { //
        title : "Singled Out",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780301/nathanWalkerPhotography/prints/web_gallery_wides-2_msqrdj.jpg'),
        description : "",
        format : "wide",
        sizesPrices : {
            size: [[10,8],[17,11],[36,24]], 
            price : ["50","125", "275"],
            sku : ['price_1LtzP3KcmnyYlZq3HQe2WIV7','price_1LtzP3KcmnyYlZq3rmlH4pfd','price_1LtzP3KcmnyYlZq3Yzn6ApO5'] // Singled Out
        },
    },
    { //
        title : "Among Us",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1663174878/nathanWalkerPhotography/amongUs_h8cn1t.jpg'),
        description : "",
        format : "tall",
        sizesPrices : {
            size: [[8,10],[11,17],[24,36]], 
            price : ["50","125", "275"],
            sku : ['price_1LtzVPKcmnyYlZq3ObQJ7Shq','price_1LtzVPKcmnyYlZq3LVJKQlXw','price_1LtzVPKcmnyYlZq3YPiSMAzP'] // Among Us
        },
    },
    { //
        title : "Foundation",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1665086523/nathanWalkerPhotography/Foundation_ny5asd.jpg'),
        description : "",
        format : "tall",
        sizesPrices : {
            size: [[8,10],[11,17],[24,36]], 
            price : ["50","125", "275"],
            sku : ['price_1LtzWpKcmnyYlZq3zx2hZ2Mu','price_1LtzWpKcmnyYlZq3RdDzr7BE','price_1LtzWpKcmnyYlZq3IfHCDPzq'] // Foundation
        },
    },
    { //
        title : "Encounters in Parking",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780301/nathanWalkerPhotography/prints/web_gallery-9_yfkwyn.jpg'),
        description : "",
        format : "tall",
        sizesPrices : {
            size: [[8,10],[11,17],[24,36]], 
            price : ["50","125", "275"],
            sku : ['price_1LtzZYKcmnyYlZq37zkZzP68','price_1LtzZYKcmnyYlZq3jnzRFAAZ','price_1LtzZYKcmnyYlZq3EPrrHNyj'] // Encounters in Parking
        },
    },
    { //
        title : "Thinking",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780303/nathanWalkerPhotography/prints/web_gallery_wides-13_o47by4.jpg'),
        description : "",
        format : "wide",
        sizesPrices : {
            size: [[8,10],[11,17],[24,36]], 
            price : ["50","125", "275"],
            sku : ['price_1LtzfqKcmnyYlZq3diCiyhjL','price_1LtzfqKcmnyYlZq37NwZJ1Ff','price_1LtzfqKcmnyYlZq33xbkiF8k']
        },
    },
    { //
        title : "1919",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780304/nathanWalkerPhotography/prints/web_gallery-4_ekw2gs.jpg'),
        description : "",
        format : "tall",
        sizesPrices : {
            size: [[8,10],[11,17],[24,36]], 
            price : ["50","125", "275"],
            sku : ['price_1Ltzh4KcmnyYlZq30FdavzXM','price_1Ltzh4KcmnyYlZq3eGxcoFsb','price_1Ltzh4KcmnyYlZq3EtEFh1IK']
        },
    },
    { //
        title : "Dividing Lines",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780302/nathanWalkerPhotography/prints/web_gallery_wides-10_absmte.jpg'),
        description : "",
        format : "wide",
        sizesPrices : {
            size: [[8,10],[11,17],[24,36]], 
            price : ["50","125", "275"],
            sku : ['price_1LtzjiKcmnyYlZq3QEIbp9Rr','price_1LtzjiKcmnyYlZq36qD40z4L','price_1LtzjiKcmnyYlZq3gAwoWibH']
        },
    },

    { //
        title : "Light Line",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780302/nathanWalkerPhotography/prints/web_gallery_wides-8_kdigel.jpg'),
        description : "",
        format : "wide",
        sizesPrices : {
            size: [[10,8],[11,17],[24,36]],
            price : ["50","125", "275"],
            sku : ['price_1LxFOtKcmnyYlZq3Kq1xsc4m','price_1LxFOtKcmnyYlZq3EO6esz7K','price_1LxFOtKcmnyYlZq3dPBwlWol']
        },
    },
    { //
        title : "Approachment",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780302/nathanWalkerPhotography/prints/web_gallery_wides-3_hpjg4x.jpg'),
        description : "",
        format : "wide",
        sizesPrices : {
            size: [[10,8],[17,11],[36,24]], 
            price : ["50","125", "275"],
            sku : ['price_1LwCn4KcmnyYlZq309vPokyz','price_1L0sI6KcmnyYlZq3DTJZGtJ5','price_1L0sI6KcmnyYlZq3xwSrxD0D']
        },
    },

    { //
        title : "Judgement",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780301/nathanWalkerPhotography/prints/web_gallery-12_heuuft.jpg'),
        description : "",
        format : "tall",
        sizesPrices : {
            size: [[8,10],[11,17],[24,36]], 
            price : ["50","125", "275"],
            sku : ['price_1LxFMLKcmnyYlZq3FgyjYNrf','price_1LxFMLKcmnyYlZq3yiYCEjbA','price_1LxFMLKcmnyYlZq3tRNtP8z0']
        },
    },
    { //
        title : "Mamacita",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1663964265/nathanWalkerPhotography/web_mamacita_uohzso.jpg'),
        description : "",
        format : "tall",
        sizesPrices : {
            size: [[8,10],[11,17],[24,36]], 
            price : ["50","125", "275"],
            sku : ['price_1LtzmCKcmnyYlZq32A0xl4W2','price_1LtzmCKcmnyYlZq3QO9M6naM','price_1LtzmCKcmnyYlZq3JnJ4zVjM']
        },
    },
    { //
        title : "Tree of Life",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1663964614/nathanWalkerPhotography/web_hotel_mfptln.jpg'),
        description : "",
        format : "tall",
        sizesPrices : {
            size: [[8,10],[11,17],[24,36]],
            price : ["50","125", "275"],
            sku : ['price_1Lw9ZsKcmnyYlZq37Lrtf714','price_1Lw9ZsKcmnyYlZq3Cj8M7gjr','price_1Lw9ZsKcmnyYlZq3LNkTyejw']
        },
    },
    { //
        title : "Frosted at West Bottoms",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/v1651780301/nathanWalkerPhotography/prints/web_gallery_wides-5_ovxjhh.jpg'),
        description : "",
        format : "wide",
        sizesPrices : {
            size: [[10,8],[17,11],[36,24]], 
            price : ["50","125", "275"],
            sku : ['price_1Lw9fiKcmnyYlZq3v4SzfXJU','price_1Lw9fiKcmnyYlZq3VDmRAdgb','price_1Lw9fiKcmnyYlZq3gxMFgQwG']
        },
    },
];