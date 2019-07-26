const { Product, Category, User } = require('./models');

const main = async() => {
    const user = await User.findOne({
        where: {
            id: 1
        }
    });

    await Category.destroy({
        where:{}
    });

    // CATEGORIES
    // await Category.destroy({
    //     // where: {
    //     //     id: [2,3,4,5,6,7]
    //     // }
    // });
    // const category1 = await Category.findByPk(1);

    const category1 = await Category.create({
        name: 'Miscellaneous',
        image_url: 'https://cdn.catawiki.net/assets/marketing/stories-images/2567-513f84cea15967df2bbda23b74d24a1cf09b54a8-og_image.jpg'
    })

    const category2 = await Category.create({
        name: 'Transportation',
        image_url: 'https://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/366dc481-0a64-11e7-af17-1940214e6372_600x400.jpg',
    })

    const category3 = await Category.create({
        name: 'Pets',
        image_url: 'https://animalkingdom.today/wp-content/uploads/2018/08/animalkingdom.today-Two-white-mutant-white-lions-768x480.jpg',
    })

    const category4 = await Category.create({
        name: 'Food',
        image_url: 'https://icdn1.themanual.com/image/themanual/the-ainsworth-gold-chicken-wings-2-375x375.jpg',
    })

    category1.setUser(user);
    category2.setUser(user);
    category3.setUser(user);
    category4.setUser(user);

    // const product = await Product.findByPk(1);
    


    const Transportation = await Category.findOne({
        where: {
            name: 'Transportation'
        }
    })

    const Pets = await Category.findOne({
        where: {
            name: 'Pets'
        }
    })

    const Food = await Category.findOne({
        where: {
            name: 'Food'
        }
    })

    const Miscellaneous = await Category.findOne({
        where: {
            name: 'Miscellaneous'
        }
    })

    // MISCELLANEOUS
    const product1 = await Product.create({
        name: 'Gold Toilet Paper',
        description: 'A Quality 3 ply toilet paper with 24 carat gold through the roll. As you use the toilet paper 24 carat gold flakes will fall onto the floor and your behind taking you to another level of sophistication.',
        image_url: 'https://s3.scoopwhoop.com/anj/sjsj/01f14d3c-d9ff-4257-94a2-a9aa3254c3e6.jpg',
        price: 1376900,
        
    });


    // FOOD
    const product3 = await Product.create({
        name: 'Luxury Ice Cubes, 50pcs',
        description: 'Comes in elegant classic pouches that are equipped with a resealable top and a one-way air valve in order to push out ambient air between accessing the ice pieces.  This ensures cleanliness and deters contaminants from coming in contact with the ice like traditional bins or ice trays',
        image_url: 'http://www.glaceice.net/uploads/3/9/6/9/3969825/3969289.jpg',
        price: 325
    })

    //  TRANSPORTATION
    const product4 = await Product.create({
        name: 'Khalilah - Golden luxury Superyacht',
        description: 'Supersport motor yacht with a sophisticated exterior designed by Palmer Johnson. Khalilahs interior layout sleeps up to 11 guests in 5 rooms including 2 master suites, 1 double cabin, 1 twin cabin and 1 pullman bed. Timeless styling, beautiful furnishings and sumptuous seating throughout to create an elegant and comfortable atmosphere.',
        image_url: 'https://cdn.boatinternational.com/images/20160412/1-109079l-1280x720.jpg',
        price:  2750000
    })

    const product2 = await Product.create({
        name: '24K Gold Men’s Racing Bike',
        description: 'Made with an aluminium frame, this bike boasts a meticulously applied layer of 24K deep Gold from the handlebars to every ridge of the gear chain, with a soft suede saddle and SR4 Tyres. Not only does the bicycle resemble a striking work of modern art to look at, but it is even more beautiful in motion, as sunlight bounces off the spinning spokes.',
        image_url: 'https://s3.scoopwhoop.com/anj/sjsj/956b9665-a2ab-4d1d-a40e-d5eea819dcbf.jpg',
        price: 327970
    });
    
    // PETS
    const product5 = await Product.create({
        name: 'The Tibetan Mastiff',
        description: 'The Tibetan Mastiff is one of the most expensive dogs in the world. They were originally bred to be guard dogs but now make an excellent pet.', 
        image_url: 'https://static2.therichestimages.com/wordpress/wp-content/uploads/2018/07/Tibetan-Mastiffs.jpg?q=50&fit=crop&w=738',
        price: 582000
    })
    
    // product.setCategory(category)
    // product.setUser(user)

    product1.setCategory(Miscellaneous)
    product2.setCategory(Transportation);
    product3.setCategory(Food);
    product4.setCategory(Transportation);
    product5.setCategory(Pets);

}

main();


