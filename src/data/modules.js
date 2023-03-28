import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name:'mooncalf'});

export default [
    {
        title : "urban",
        titlePosition : "bottom-right",
        img : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1599507215/nathanWalkerPhotography/lighthouse00_hawott.jpg'),
        galleryItems : [
            {
                img: cloudinaryCore.url("https://res.cloudinary.com/mooncalf/image/upload/v1600286340/nathanWalkerPhotography/urban/climateControlClimateChange_w2wbik.jpg"),
            },
            {
                img: cloudinaryCore.url("https://res.cloudinary.com/mooncalf/image/upload/v1600286321/nathanWalkerPhotography/urban/ghostShip_xdnrej.jpg"),
            },
            {
                img: cloudinaryCore.url("https://res.cloudinary.com/mooncalf/image/upload/v1600286317/nathanWalkerPhotography/urban/divisiveLighting_kwqztn.jpg"),
            },
            {
                img: cloudinaryCore.url("https://res.cloudinary.com/mooncalf/image/upload/v1600286296/nathanWalkerPhotography/urban/paradiseParkingLot_nzsumd.jpg"),
            },
            {
                img: cloudinaryCore.url("https://res.cloudinary.com/mooncalf/image/upload/v1600286289/nathanWalkerPhotography/urban/lighthouseDuluth_dk2csd.jpg"),
            },
            {
                img: cloudinaryCore.url("https://res.cloudinary.com/mooncalf/image/upload/v1600286260/nathanWalkerPhotography/urban/fogBottom_hrec4j.jpg"),
            },
        ]
    },
];