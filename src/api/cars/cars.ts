export const CarData = [
  {
    brand: 'BMW',
    name: 'BMW i8 2015',
    rating: '4.97 (90 ratings)',
    pricePerDay: 155,

    mpg: {
      icon: 'assets/img/mpg.svg',
      detail: '29 MPG',
    },
    fuelType: {
      icon: 'assets/img/fuel.svg',
      detail: 'Hybrid (Premium)',
    },
    doors: {
      icon: 'assets/img/doors.svg',
      detail: 2,
    },
    seats: {
      icon: 'assets/img/seat.svg',
      detail: 4,
    },
    detail:
      "Experience California in a fun and unique way with this Rose Gold BMW i8. This car attracts A LOT of attention so be prepared for phones and cameras taking pictures of you while you drive by. Also, you can park virtually ANYWHERE. You won’t have to pay meters, you can park in the handicap spots ♿️, no red zones, fire hydrants, street sweeper zones (please use discretion). This BMW i8 accelerates from 0 to 100 km/h (62 mph) in 4.4 seconds and has an electronic limited top speed of 250 km/h (155 mph).\n\nThe exotic yet futuristic design established the I8 as the BMW's first step towards a new generation of cars and combined luxury with the plug-in hybrid experience.\n\nPlease, NO SMOKING (Cigarettes, Cigars, Weed, Vaping, E-Cigs, etc.) An additional $250 cleaning fee will be assessed if this rule is violated.\n\nBe safe and have a great drive! We are here to make your trip as easy and enjoyable as possible. Please don't hesitate to reach out with any questions before, during, or after your trip as we're here to help!\n\n*** PLEASE NOTE DriveFinder IS A CAR SHARING COMMUNITY ***\nIn other words, please treat the vehicle as if it were your own. We treat and take care of all of our vehicles as best as we can, so we definitely appreciate when that effort is reciprocated. PLEASE KEEP IT CLEAN",
    features: [
      {
        icon: 'assets/img/25+.svg',
        feature: 'Must be 25+ to book',
      },
      {
        icon: 'assets/img/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Rahim',
      rating: 5.0,
      trips: 2183,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: 'assets/img/users/nick p.jpg',
          date: 'September 11, 2023',
          comment:
            'Super nice car and fun to drive. Elijah was extremely nice and accommodating. Will definitely be renting again next time I’m in town',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: 'assets/img/user2.jpg',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndReviews: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      cleanliness: 4.9,
      maintenance: 5.0,
      communication: 5.0,
      convenience: 5.0,
      accuracy: 5.0,
      totalRatings: 85,
    },
    pickup: [
      {
        select: 'pickup at car location',
        icon: 'assets/img/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: 'assets/img/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: 'assets/img/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: {
      main: 'assets/img/bmw/BMW i8 2019-1.jpg',
      additional: [
        'assets/img/bmw/BMW i8 2019-1.jpg',
        'assets/img/bmw/BMW i8 2019-2.jpg',
        'assets/img/bmw/BMW i8 2019-3.jpg',
        'assets/img/bmw/BMW i8 2019-4.jpg',
        'assets/img/bmw/BMW i8 2019-5.jpg',
        'assets/img/bmw/BMW i8 2019-6.jpg',
        'assets/img/bmw/BMW i8 2019-7.jpg',
        'assets/img/bmw/BMW i8 2019-8.jpg',
      ],
    },

    reviews: [
      {
        reviewer: 'Lucy F.',
        rating: 4.5,
        img: 'assets/img/user3.jpg',
        date: 'October 22, 2023',
        comment:
          'Super easy pick up and drop off and definitely a great (and fun!) car. Recommend. 😊',
      },

      {
        reviewer: 'Amy S.',
        rating: 4,
        img: 'assets/img/user1.jpg',
        date: 'October 15, 2023',
        comment:
          'Car was great, pick up and drop off were smooth and communication was timely and thorough. Highly recommend.',
      },
      {
        reviewer: 'George H.',
        rating: 4.1,
        img: 'assets/img/user2.jpg',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
    booking: {
      startDate: '11/06/2023',
      startTime: '10:00 AM',
      endDate: '11/09/2023',
      endTime: '10:00 AM',
      pickupReturnLocation: 'Los Angeles, CA 90005',
      discount: 19,
      cancellationPolicy: 'Free cancellation',
      distanceIncluded: 300,
      feePerAdditionalMile: 1.23,
      insurance: 'Insurance via Travelers',
    },
  },

  {
    brand: 'BMW',
    name: 'BMW i8 2019',
    rating: '4.92 (10 ratings)',
    pricePerDay: 120,

    fuelType: {
      icon: 'assets/img/fuel.svg',
      detail: 'Hybrid (Premium)',
    },
    doors: {
      icon: 'assets/img/doors.svg',
      detail: 2,
    },
    seats: {
      icon: 'assets/img/seat.svg',
      detail: 2,
    },
    detail:
      "The BMW i8 Roadster is a stunning and futuristic convertible that seamlessly blends high-performance capabilities with sustainable technology. With its sleek and aerodynamic design, this electric sports car is a head-turner, catching the eye with its unique scissor doors and captivating lines.The exterior of the BMW i8 Roadster showcases a perfect balance between elegance and sportiness. The low-slung profile, combined with the striking LED headlights and kidney grille, gives it a distinct and aggressive look. The soft-top roof can be retracted in just 15 seconds, allowing you to enjoy the open-air driving experience at a moment's notice. Safety is a top priority in the BMW i8 Roadster, with features such as stability control, traction control, and advanced braking systems ensuring optimal handling and stability. The car is also equipped with advanced airbags and a rigid carbon fiber chassis, providing maximum protection in the event of a collision.",
    features: [
      {
        icon: 'assets/img/25+.svg',
        feature: 'Must be 25+ to book',
      },
      {
        icon: 'assets/img/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: 'assets/img/backup-camera.svg',
        feature: 'Backup Camera',
      },
      {
        icon: 'assets/img/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: 'assets/img/convertible.svg',
        feature: 'Convertible',
      },
      {
        icon: 'assets/img/gps.svg',
        feature: 'Gps',
      },
      {
        icon: 'assets/img/keyless.svg',
        feature: 'Keyless',
      },
      {
        icon: 'assets/img/usb.svg',
        feature: 'USD Input',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'No smoking No pets.  Must give key upon return back to host.  Cannot leave vehicle without handing off key to host.',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Ziar',
      rating: 3.0,
      trips: 21,
      joined: 'Aug 2023',
      responseTime: '4 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: 'assets/img/user1.jpg',
          date: 'September 11, 2023',
          comment:
            'Loved this car and pickup/drop off was a breeze. Michael explained everything and was very patient. Great time.',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: 'assets/img/user3.jpg',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndReviews: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      cleanliness: 4.9,
      maintenance: 5.0,
      communication: 5.0,
      convenience: 5.0,
      accuracy: 5.0,
      totalRatings: 85,
    },
    pickup: [
      {
        select: 'pickup at car location',
        icon: 'assets/img/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: 'assets/img/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: 'assets/img/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: {
      main: 'assets/img/bmw/BMW i8 2019-1.jpg',
      additional: [
        'assets/img/bmw/BMW i8 2019-1.jpg',
        'assets/img/bmw/BMW i8 2019-2.jpg',
        'assets/img/bmw/BMW i8 2019-3.jpg',
        'assets/img/bmw/BMW i8 2019-4.jpg',
        'assets/img/bmw/BMW i8 2019-5.jpg',
        'assets/img/bmw/BMW i8 2019-6.jpg',
        'assets/img/bmw/BMW i8 2019-7.jpg',
        'assets/img/bmw/BMW i8 2019-8.jpg',
      ],
    },

    reviews: [
      {
        reviewer: 'Rob da Bank',
        rating: 4.2,
        img: 'assets/img/user3.jpg',
        date: 'September 23, 2023',
        comment:
          'Loved this car and pickup/drop off was a breeze. Host explained everything and was very patient. Great time.',
      },
      {
        reviewer: 'Kevin Z.',
        rating: 3.9,
        img: 'assets/img/user2.jpg',
        date: 'September 11, 2023',
        comment:
          'Very nice car fun to drive. Easy pick up and drop off. Highly recommended',
      },
    ],
    booking: {
      startDate: '11/06/2023',
      startTime: '10:00 AM',
      endDate: '11/09/2023',
      endTime: '10:00 AM',
      pickupReturnLocation: 'Los Angeles, CA 90005',
      discount: 19,
      cancellationPolicy: 'Free cancellation',
      distanceIncluded: 300,
      feePerAdditionalMile: 1.23,
      insurance: 'Insurance via Travelers',
    },
  },
  {
    brand: 'BMW',
    name: 'BMW Z4 2020',
    rating: '4.98 (50 ratings)',
    pricePerDay: 100,
    mpg: {
      icon: 'assets/img/mpg.svg',
      detail: '28 MPG',
    },
    fuelType: {
      icon: 'assets/img/fuel.svg',
      detail: 'Gas (Premium)',
    },
    doors: {
      icon: 'assets/img/doors.svg',
      detail: 2,
    },
    seats: {
      icon: 'assets/img/seat.svg',
      detail: 2,
    },
    detail:
      "The BMW Z4 2020 is a dynamic and stylish convertible that delivers a thrilling driving experience. With its sleek design, powerful engine options, and precise handling, the Z4 offers a perfect blend of performance and luxury. The retractable hardtop adds versatility, allowing you to enjoy open-air driving at the touch of a button. Inside, you'll find a refined interior with advanced technology features, enhancing both comfort and connectivity. Whether cruising on scenic roads or navigating city streets, the BMW Z4 2020 embodies the spirit of driving pleasure and automotive sophistication.",
    features: [
      {
        icon: 'assets/img/25+.svg',
        feature: 'Must be 25+ to book',
      },
      {
        icon: 'assets/img/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: 'assets/img/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: 'assets/img/backup-camera.svg',
        feature: 'Backup Camera',
      },
      {
        icon: 'assets/img/blindspot.svg',
        feature: 'Blind spot Warning',
      },
      {
        icon: 'assets/img/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: 'assets/img/convertible.svg',
        feature: 'Convertible',
      },
      {
        icon: 'assets/img/gps.svg',
        feature: 'Gps',
      },
      {
        icon: 'assets/img/keyless.svg',
        feature: 'Keyless',
      },
      {
        icon: 'assets/img/usb.svg',
        feature: 'USB Input',
      },
    ],

    description: {
      rules:
        'Save time, make drop-off a breeze, and avoid additional fees by adding this Extra, which allows you to return my car at any fuel level. Price includes up to a full tank of gas.',
      guidelines:
        "Pick up & drop off meet up location will be on the upper level parking structure by the McDonald's & Ono Hawaiian Grill.",
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Ed.',
      rating: 3.0,
      trips: 21,
      joined: 'Aug 2021',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: 'assets/img/apemultiverse-20220823-0004.jpg',
          date: 'September 11, 2023',
          comment:
            'Loved this car and pickup/drop off was a breeze. Michael explained everything and was very patient. Great time.',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: 'assets/img/apemultiverse-20220823-0004.jpg',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndReviews: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      cleanliness: 4.9,
      maintenance: 5.0,
      communication: 5.0,
      convenience: 5.0,
      accuracy: 5.0,
      totalRatings: 85,
    },
    pickup: [
      {
        select: 'pickup at car location',
        icon: 'assets/img/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: 'assets/img/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: 'assets/img/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: {
      main: 'assets/img/bmw/BMW i8 2019-1.jpg',
      additional: [
        'assets/img/bmw/BMW i8 2019-1.jpg',
        'assets/img/bmw/BMW i8 2019-2.jpg',
        'assets/img/bmw/BMW i8 2019-3.jpg',
        'assets/img/bmw/BMW i8 2019-4.jpg',
        'assets/img/bmw/BMW i8 2019-5.jpg',
        'assets/img/bmw/BMW i8 2019-6.jpg',
        'assets/img/bmw/BMW i8 2019-7.jpg',
        'assets/img/bmw/BMW i8 2019-8.jpg',
      ],
    },

    reviews: [
      {
        reviewer: 'Rob da Bank',
        rating: 4.2,
        img: 'assets/img/user3.jpg',
        date: 'September 23, 2023',
        comment:
          'Great rental. This is the second time I’ve rented this car from the host and it was just as great of an experience the second time. Easy and fast communication, flexible on pick up/drop off, great car. Will happily rent with him again.',
      },
      {
        reviewer: 'Kevin Z.',
        rating: 3.9,
        img: 'assets/img/user2.jpg',
        date: 'September 11, 2023',
        comment:
          'Very nice car fun to drive. Easy pick up and drop off. Highly recommended',
      },
    ],
    booking: {
      startDate: '11/06/2023',
      startTime: '10:00 AM',
      endDate: '11/09/2023',
      endTime: '10:00 AM',
      pickupReturnLocation: 'Los Angeles, CA 90005',
      discount: 19,
      cancellationPolicy: 'Free cancellation',
      distanceIncluded: 300,
      feePerAdditionalMile: 1.23,
      insurance: 'Insurance via Travelers',
    },
  },
  {
    brand: 'BMW',
    name: 'BMW 4 Series 2021',
    rating: '4.90 (19 ratings)',
    pricePerDay: 86,

    mpg: {
      icon: 'assets/img/mpg.svg',
      detail: 'Gas (Premium)',
    },

    doors: {
      icon: 'assets/img/doors.svg',
      detail: 2,
    },
    seats: {
      icon: 'assets/img/seat.svg',
      detail: 4,
    },
    detail:
      'BMW M440i is a stunning all-wheel drive coupe of German assembly. The spacious trunk and roomy cabin is perfect for traveling in a group, with the car being designed for four passengers. An elegant, black leather interior design is complemented by titanium white exterior, guaranteeing your trip to be completed in style. The panoramic roof enriches the ride with the catching views around, both for business or traveling related trips.',
    features: [
      {
        icon: 'assets/img/25+.svg',
        feature: 'Must be 25+ to book',
      },
      {
        icon: 'assets/img/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: 'assets/img/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: 'assets/img/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: 'assets/img/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: 'assets/img/gps.svg',
        feature: 'Gps',
      },

      {
        icon: 'assets/img/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: 'assets/img/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: 'assets/img/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: 'assets/img/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: 'assets/img/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Driving outside the United States is prohibited',
      guidelines:
        'Save time, make drop-off a breeze, and avoid additional fees by adding this Extra, which allows you to return my car at any fuel level. Price includes up to a full tank of gas.',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'Add optional Extras to your trip at checkout.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Darren',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: 'assets/img/users/nick p.jpg',
          date: 'September 11, 2023',
          comment:
            'Super nice car and fun to drive. Elijah was extremely nice and accommodating. Will definitely be renting again next time I’m in town',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: 'assets/img/user2.jpg',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndReviews: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      cleanliness: 4.9,
      maintenance: 5.0,
      communication: 5.0,
      convenience: 5.0,
      accuracy: 5.0,
      totalRatings: 85,
    },
    pickup: [
      {
        select: 'pickup at car location',
        icon: 'assets/img/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: 'assets/img/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: 'assets/img/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: {
      main: 'assets/img/bmw/BMW 4 Series 2021-1.jpg',
      additional: [
        'assets/img/bmw/BMW 4 Series 2021-1.jpg',
        'assets/img/bmw/BMW 4 Series 2021-2.jpg',
        'assets/img/bmw/BMW 4 Series 2021-3.jpg',
        'assets/img/bmw/BMW 4 Series 2021-4.jpg',
      ],
    },

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: 'assets/img/user3.jpg',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: 'assets/img/user2.jpg',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
    booking: {
      startDate: '11/06/2023',
      startTime: '10:00 AM',
      endDate: '11/09/2023',
      endTime: '10:00 AM',
      pickupReturnLocation: 'Los Angeles, CA 90005',
      discount: 19,
      cancellationPolicy: 'Free cancellation',
      distanceIncluded: 300,
      feePerAdditionalMile: 1.23,
      insurance: 'Insurance via Travelers',
    },
  },

  {
    brand: 'Benz',
    name: 'Mercedes-Benz G-Class 2019',
    rating: '4.90 (9 ratings)',
    pricePerDay: 506,

    mpg: {
      icon: 'assets/img/mpg.svg',
      detail: 'Gas',
    },
    doors: {
      icon: 'assets/img/doors.svg',
      detail: 5,
    },
    seats: {
      icon: 'assets/img/seat.svg',
      detail: 5,
    },
    detail:
      'The 2019 Mercedes-Benz G-Class offers a perfect blend of rugged off-road capability and luxurious comfort. With its iconic boxy design, powerful engine options, and a lavish interior, this SUV exudes both timeless style and modern sophistication. Whether navigating city streets or conquering challenging terrains, the G-Class delivers a commanding performance. Cutting-edge technology, premium materials, and meticulous craftsmanship define the interior, providing passengers with a first-class driving experience. In summary, the 2019 Mercedes-Benz G-Class is a symbol of prestige, combining off-road prowess with opulent refinement.',
    features: [
      {
        icon: 'assets/img/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: 'assets/img/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: 'assets/img/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: 'assets/img/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: 'assets/img/gps.svg',
        feature: 'Gps',
      },

      {
        icon: 'assets/img/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: 'assets/img/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: 'assets/img/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: 'assets/img/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: 'assets/img/pet.svg',
        feature: 'Pet Friendly',
      },
      {
        icon: 'assets/img/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Darren',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: 'assets/img/users/nick p.jpg',
          date: 'September 11, 2023',
          comment:
            'Super nice car and fun to drive. Elijah was extremely nice and accommodating. Will definitely be renting again next time I’m in town',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: 'assets/img/user2.jpg',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndReviews: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      cleanliness: 4.9,
      maintenance: 5.0,
      communication: 5.0,
      convenience: 5.0,
      accuracy: 5.0,
      totalRatings: 85,
    },
    pickup: [
      {
        select: 'pickup at car location',
        icon: 'assets/img/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: 'assets/img/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: 'assets/img/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: {
      main: 'assets/img/benz/Mercedes-Benz G-Class 2019-1.jpg',
      additional: [
        'assets/img/benz/Mercedes-Benz G-Class 2019-1.jpg',
        'assets/img/benz/Mercedes-Benz G-Class 2019-2.jpg',
        'assets/img/benz/Mercedes-Benz G-Class 2019-3.jpg',
        'assets/img/benz/Mercedes-Benz G-Class 2019-4.jpg',
      ],
    },

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: 'assets/img/user3.jpg',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: 'assets/img/user2.jpg',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
    booking: {
      startDate: '11/06/2023',
      startTime: '10:00 AM',
      endDate: '11/09/2023',
      endTime: '10:00 AM',
      pickupReturnLocation: 'Los Angeles, CA 90005',
      discount: 19,
      cancellationPolicy: 'Free cancellation',
      distanceIncluded: 300,
      feePerAdditionalMile: 1.23,
      insurance: 'Insurance via Travelers',
    },
  },
  {
    brand: 'Benz',
    name: 'Mercedes-Benz C-Class 2017',
    rating: '4.96 (9 ratings)',
    pricePerDay: 200,

    mpg: {
      icon: 'assets/img/mpg.svg',
      detail: '24 MPG',
    },
    fuelType: {
      icon: 'assets/img/mpg.svg',
      detail: 'Gas (Premium)',
    },
    doors: {
      icon: 'assets/img/doors.svg',
      detail: 4,
    },
    seats: {
      icon: 'assets/img/seat.svg',
      detail: 5,
    },
    detail:
      'The 2017 Mercedes-Benz C-Class is a luxury sedan that epitomizes elegance and performance. With a sleek design, advanced technology features, and a powerful engine, it offers a refined driving experience. The C-Class boasts a well-crafted interior, featuring premium materials and cutting-edge infotainment. Equipped with a range of safety features, this sedan ensures a secure and comfortable journey. Experience the perfect blend of style and performance in the Mercedes-Benz C-Class 2017.',
    features: [
      {
        icon: 'assets/img/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: 'assets/img/apple-carplay.svg',
        feature: 'Andriod Auto',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: 'assets/img/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: 'assets/img/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: 'assets/img/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: 'assets/img/gps.svg',
        feature: 'Gps',
      },

      {
        icon: 'assets/img/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: 'assets/img/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: 'assets/img/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: 'assets/img/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: 'assets/img/pet.svg',
        feature: 'Pet Friendly',
      },
      {
        icon: 'assets/img/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Anzbelika',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: 'assets/img/users/nick p.jpg',
          date: 'September 11, 2023',
          comment:
            'Anzbelika was a great host, very understanding and very professional. I had a accident with the car and she was very understanding given the circumstances. I will make sure to be renting again when I’m in LA based off the great customer service.',
        },
        {
          author: 'DriveFinder',
          rating: 4.9,
          img: '',
          date: 'September 11, 2023',
          comment:
            'The host cancelled this trip 2 hours before it started. This message was automatically posted by DriveFinder.',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndReviews: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      cleanliness: 4.9,
      maintenance: 5.0,
      communication: 5.0,
      convenience: 5.0,
      accuracy: 5.0,
      totalRatings: 85,
    },
    pickup: [
      {
        select: 'pickup at car location',
        icon: 'assets/img/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: 'assets/img/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: 'assets/img/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: {
      main: 'assets/img/benz/Mercedes-Benz C-Class 2017-1.jpg',
      additional: [
        'assets/img/benz/Mercedes-Benz C-Class 2017-1.jpg',
        'assets/img/benz/Mercedes-Benz C-Class 2017-2.jpg',
        'assets/img/benz/Mercedes-Benz C-Class 2017-3.jpg',
        'assets/img/benz/Mercedes-Benz C-Class 2017-4.jpg',
      ],
    },

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: 'assets/img/user3.jpg',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: 'assets/img/user2.jpg',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
    booking: {
      startDate: '11/06/2023',
      startTime: '10:00 AM',
      endDate: '11/09/2023',
      endTime: '10:00 AM',
      pickupReturnLocation: 'Los Angeles, CA 90005',
      discount: 19,
      cancellationPolicy: 'Free cancellation',
      distanceIncluded: 300,
      feePerAdditionalMile: 1.23,
      insurance: 'Insurance via Travelers',
    },
  },
  {
    brand: 'Benz',
    name: 'Mercedes-Benz C-Class 2019',
    rating: '4.96 (9 ratings)',
    pricePerDay: 200,

    mpg: {
      icon: 'assets/img/mpg.svg',
      detail: '28 MPG',
    },
    fuelType: {
      icon: 'assets/img/mpg.svg',
      detail: 'Gas (Premium)',
    },
    doors: {
      icon: 'assets/img/doors.svg',
      detail: 4,
    },
    seats: {
      icon: 'assets/img/seat.svg',
      detail: 5,
    },
    detail:
      'The 2019 Mercedes-Benz C-Class seamlessly combines luxury and performance in a sleek package. With its refined design, advanced technology features, and powerful engine options, the C-Class delivers a sophisticated driving experience. The meticulously crafted interior offers premium materials and cutting-edge infotainment, making every journey comfortable and connected. Experience the perfect blend of elegance and driving dynamics in the Mercedes-Benz C-Class 2019.',
    features: [
      {
        icon: 'assets/img/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },

      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: 'assets/img/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: 'assets/img/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: 'assets/img/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: 'assets/img/gps.svg',
        feature: 'Gps',
      },

      {
        icon: 'assets/img/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: 'assets/img/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: 'assets/img/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: 'assets/img/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: 'assets/img/pet.svg',
        feature: 'Pet Friendly',
      },
      {
        icon: 'assets/img/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Den',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: 'assets/img/users/nick p.jpg',
          date: 'September 11, 2023',
          comment:
            'Anzbelika was a great host, very understanding and very professional. I had a accident with the car and she was very understanding given the circumstances. I will make sure to be renting again when I’m in LA based off the great customer service.',
        },
        {
          author: 'Megan',
          rating: 4.9,
          img: '',
          date: 'September 11, 2023',
          comment: 'You did good 👍 Appreciate the responsiveness.',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndReviews: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      cleanliness: 4.9,
      maintenance: 5.0,
      communication: 5.0,
      convenience: 5.0,
      accuracy: 5.0,
      totalRatings: 85,
    },
    pickup: [
      {
        select: 'pickup at car location',
        icon: 'assets/img/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: 'assets/img/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: 'assets/img/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: {
      main: 'assets/img/benz/Mercedes-Benz C-Class 2019-1.jpg',
      additional: [
        'assets/img/benz/Mercedes-Benz C-Class 2019-1.jpg',
        'assets/img/benz/Mercedes-Benz C-Class 2019-2.jpg',
        'assets/img/benz/Mercedes-Benz C-Class 2019-3.jpg',
        'assets/img/benz/Mercedes-Benz C-Class 2019-4.jpg',
        'assets/img/benz/Mercedes-Benz C-Class 2019-5.jpg',
        'assets/img/benz/Mercedes-Benz C-Class 2019-6.jpg',
      ],
    },

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: 'assets/img/user3.jpg',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: 'assets/img/user2.jpg',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
    booking: {
      startDate: '11/06/2023',
      startTime: '10:00 AM',
      endDate: '11/09/2023',
      endTime: '10:00 AM',
      pickupReturnLocation: 'Los Angeles, CA 90005',
      discount: 19,
      cancellationPolicy: 'Free cancellation',
      distanceIncluded: 300,
      feePerAdditionalMile: 1.23,
      insurance: 'Insurance via Travelers',
    },
  },
  {
    brand: 'Benz',
    name: 'Mercedes-Benz G-Class 2016',
    rating: '4.96 (19 ratings)',
    pricePerDay: 200,

    mpg: {
      icon: 'assets/img/mpg.svg',
      detail: '14 MPG',
    },
    fuelType: {
      icon: 'assets/img/mpg.svg',
      detail: 'Gas (Premium)',
    },
    doors: {
      icon: 'assets/img/doors.svg',
      detail: 4,
    },
    seats: {
      icon: 'assets/img/seat.svg',
      detail: 5,
    },
    detail:
      'The 2016 Mercedes-Benz G-Class offers a luxurious and powerful driving experience. Known for its iconic boxy design, this SUV combines rugged off-road capabilities with a plush and sophisticated interior. With a robust V8 engine, advanced technology features, and a reputation for durability, the G-Class delivers a perfect blend of style and performance for those seeking a distinctive and high-end driving experience.',
    features: [
      {
        icon: 'assets/img/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: 'assets/img/apple-carplay.svg',
        feature: 'Andriod Auto',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: 'assets/img/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: 'assets/img/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: 'assets/img/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: 'assets/img/gps.svg',
        feature: 'Gps',
      },

      {
        icon: 'assets/img/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: 'assets/img/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: 'assets/img/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: 'assets/img/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: 'assets/img/pet.svg',
        feature: 'Pet Friendly',
      },
      {
        icon: 'assets/img/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Anzbelika',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: 'assets/img/users/nick p.jpg',
          date: 'September 11, 2023',
          comment:
            'Anzbelika was a great host, very understanding and very professional. I had a accident with the car and she was very understanding given the circumstances. I will make sure to be renting again when I’m in LA based off the great customer service.',
        },
        {
          author: 'DriveFinder',
          rating: 4.9,
          img: '',
          date: 'September 11, 2023',
          comment:
            'The host cancelled this trip 2 hours before it started. This message was automatically posted by DriveFinder.',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndReviews: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      cleanliness: 4.9,
      maintenance: 5.0,
      communication: 5.0,
      convenience: 5.0,
      accuracy: 5.0,
      totalRatings: 85,
    },
    pickup: [
      {
        select: 'pickup at car location',
        icon: 'assets/img/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: 'assets/img/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: 'assets/img/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: {
      main: 'assets/img/benz/Mercedes-Benz G-Class 2016-1.jpg',
      additional: [
        'assets/img/benz/Mercedes-Benz G-Class 2016-1.jpg',
        'assets/img/benz/Mercedes-Benz G-Class 2016-2.jpg',
        'assets/img/benz/Mercedes-Benz G-Class 2016-3.jpg',
        'assets/img/benz/Mercedes-Benz G-Class 2016-4.jpg',
      ],
    },

    reviews: [
      {
        reviewer: 'Williams ',
        rating: 4.5,
        img: 'assets/img/user3.jpg',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: 'assets/img/user2.jpg',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
    booking: {
      startDate: '11/06/2023',
      startTime: '10:00 AM',
      endDate: '11/09/2023',
      endTime: '10:00 AM',
      pickupReturnLocation: 'Los Angeles, CA 90005',
      discount: 19,
      cancellationPolicy: 'Free cancellation',
      distanceIncluded: 300,
      feePerAdditionalMile: 1.23,
      insurance: 'Insurance via Travelers',
    },
  },

  {
    brand: 'Toyota',
    name: 'Toyota Prius Prime 2021',
    rating: '4.99 (19 ratings)',
    pricePerDay: 56,

    mpg: {
      icon: 'assets/img/mpg.svg',
      detail: '54 MPG',
    },
    fuelType: {
      icon: 'assets/img/fuel.svg',
      detail: 'Gas (Regular)',
    },
    doors: {
      icon: 'assets/img/doors.svg',
      detail: 4,
    },
    seats: {
      icon: 'assets/img/seat.svg',
      detail: 5,
    },
    detail:
      'The 2019 Mercedes-Benz G-Class offers a perfect blend of rugged off-road capability and luxurious comfort. With its iconic boxy design, powerful engine options, and a lavish interior, this SUV exudes both timeless style and modern sophistication. Whether navigating city streets or conquering challenging terrains, the G-Class delivers a commanding performance. Cutting-edge technology, premium materials, and meticulous craftsmanship define the interior, providing passengers with a first-class driving experience. In summary, the 2019 Mercedes-Benz G-Class is a symbol of prestige, combining off-road prowess with opulent refinement.',
    features: [
      {
        icon: 'assets/img/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: 'assets/img/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: 'assets/img/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: 'assets/img/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: 'assets/img/gps.svg',
        feature: 'Gps',
      },

      {
        icon: 'assets/img/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: 'assets/img/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: 'assets/img/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: 'assets/img/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: 'assets/img/pet.svg',
        feature: 'Pet Friendly',
      },
      {
        icon: 'assets/img/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Darren',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: 'assets/img/users/nick p.jpg',
          date: 'September 11, 2023',
          comment:
            'Super nice car and fun to drive. Elijah was extremely nice and accommodating. Will definitely be renting again next time I’m in town',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: 'assets/img/user2.jpg',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndReviews: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      cleanliness: 4.9,
      maintenance: 5.0,
      communication: 5.0,
      convenience: 5.0,
      accuracy: 5.0,
      totalRatings: 85,
    },
    pickup: [
      {
        select: 'pickup at car location',
        icon: 'assets/img/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: 'assets/img/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: 'assets/img/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: {
      main: 'assets/img/toyota/Toyota Prius Prime 2021-1.jpg',
      additional: [
        'assets/img/toyota/Toyota Prius Prime 2021-1.jpg',
        'assets/img/toyota/Toyota Prius Prime 2021-2.jpg',
        'assets/img/toyota/Toyota Prius Prime 2021-3.jpg',
        'assets/img/toyota/Toyota Prius Prime 2021-4.jpg',
      ],
    },

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: 'assets/img/user3.jpg',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: 'assets/img/user2.jpg',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
    booking: {
      startDate: '11/06/2023',
      startTime: '10:00 AM',
      endDate: '11/09/2023',
      endTime: '10:00 AM',
      pickupReturnLocation: 'Los Angeles, CA 90005',
      discount: 19,
      cancellationPolicy: 'Free cancellation',
      distanceIncluded: 300,
      feePerAdditionalMile: 1.23,
      insurance: 'Insurance via Travelers',
    },
  },
  {
    brand: 'Toyota',
    name: 'Toyota Supra 2021',
    rating: '4.99 (19 ratings)',
    pricePerDay: 56,

    mpg: {
      icon: 'assets/img/mpg.svg',
      detail: '28 MPG',
    },
    fuelType: {
      icon: 'assets/img/fuel.svg',
      detail: 'Gas (Premium)',
    },
    doors: {
      icon: 'assets/img/doors.svg',
      detail: 2,
    },
    seats: {
      icon: 'assets/img/seat.svg',
      detail: 2,
    },
    detail:
      'The 2021 Toyota Supra delivers exhilarating performance and precision engineering, seamlessly blending sporty styling with cutting-edge technology. With a turbocharged inline-six engine, agile handling, and a sleek design, the Supra offers an immersive driving experience. Its driver-centric cockpit, advanced infotainment, and safety features make it a thrilling and sophisticated sports car for enthusiasts. Unleash the power of the road with the Toyota Supra 2021.',
    features: [
      {
        icon: 'assets/img/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: 'assets/img/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: 'assets/img/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: 'assets/img/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: 'assets/img/gps.svg',
        feature: 'Gps',
      },

      {
        icon: 'assets/img/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: 'assets/img/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: 'assets/img/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: 'assets/img/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: 'assets/img/pet.svg',
        feature: 'Pet Friendly',
      },
      {
        icon: 'assets/img/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Park in the corner of the lot.',
      guidelines: 'No Smoking',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '25+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Sarah',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: 'assets/img/users/nick p.jpg',
          date: 'September 11, 2023',
          comment:
            'Super nice car and fun to drive. Elijah was extremely nice and accommodating. Will definitely be renting again next time I’m in town',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: 'assets/img/user2.jpg',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndReviews: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      cleanliness: 4.9,
      maintenance: 5.0,
      communication: 5.0,
      convenience: 5.0,
      accuracy: 5.0,
      totalRatings: 85,
    },
    pickup: [
      {
        select: 'pickup at car location',
        icon: 'assets/img/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: 'assets/img/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: 'assets/img/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: {
      main: 'assets/img/toyota/Toyota Supra 2021-1.jpg',
      additional: [
        'assets/img/toyota/Toyota Supra 2021-1.jpg',
        'assets/img/toyota/Toyota Supra 2021-2.jpg',
        'assets/img/toyota/Toyota Supra 2021-3.jpg',
        'assets/img/toyota/Toyota Supra 2021-4.jpg',
        'assets/img/toyota/Toyota Supra 2021-5.jpg',
        'assets/img/toyota/Toyota Supra 2021-6.jpg',
        'assets/img/toyota/Toyota Supra 2021-7.jpg',
      ],
    },

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: 'assets/img/user3.jpg',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: 'assets/img/user2.jpg',
        date: 'October 8, 2023',
        comment:
          'Great car. Really fun to drive. Cali vibes for sure. Rahim was super nice and helpful and picking up the car is really easy from LAX. 100% would rent again.',
      },
    ],
    booking: {
      startDate: '11/06/2023',
      startTime: '10:00 AM',
      endDate: '11/09/2023',
      endTime: '10:00 AM',
      pickupReturnLocation: 'Los Angeles, CA 90005',
      discount: 19,
      cancellationPolicy: 'Free cancellation',
      distanceIncluded: 300,
      feePerAdditionalMile: 1.23,
      insurance: 'Insurance via Travelers',
    },
  },

  {
    brand: 'Lexus',
    name: 'Lexus IS 2022',
    rating: '4.90 (19 ratings)',
    pricePerDay: 126,

    mpg: {
      icon: 'assets/img/mpg.svg',
      detail: '22 MPG',
    },
    fuelType: {
      icon: 'assets/img/fuel.svg',
      detail: 'Gas',
    },
    doors: {
      icon: 'assets/img/doors.svg',
      detail: 4,
    },
    seats: {
      icon: 'assets/img/seat.svg',
      detail: 5,
    },
    detail:
      'Looking for a sporty and luxurious ride look no further new 2022 IS 350 f sport is the car for you. Fuel efficiency is a plus with the new sporty edging design with brown a real crowd pleaser. Pearl white with red guts what a match made in heaven step inside the new 2022 IS 350 F-Sport. The 2022 Lexus IS is a luxury compact sedan that seamlessly combines performance and sophistication. With a sleek exterior design, the IS exudes modern elegance, while its powerful engine options deliver a thrilling driving experience. Inside, the refined cabin features premium materials, cutting-edge technology, and comfortable seating. Equipped with advanced safety features and a host of technology enhancements, the Lexus IS 2022 offers a perfect balance of style, comfort, and performance for those seeking a premium driving experience.',
    features: [
      {
        icon: 'assets/img/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
      {
        icon: 'assets/img/aux-input.svg',
        feature: 'Aux Input',
      },
      {
        icon: 'assets/img/backup-camera.svg',
        feature: 'Backup Camera',
      },

      {
        icon: 'assets/img/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: 'assets/img/gps.svg',
        feature: 'Gps',
      },

      {
        icon: 'assets/img/usb.svg',
        feature: 'USB Input',
      },

      {
        icon: 'assets/img/longTerm.svg',
        feature: 'Long-term Car',
      },
      {
        icon: 'assets/img/4-wheel.svg',
        feature: 'All-wheel drive',
      },
      {
        icon: 'assets/img/child-seat.svg',
        feature: 'Child seat',
      },
      {
        icon: 'assets/img/pet.svg',
        feature: 'Pet Friendly',
      },
      {
        icon: 'assets/img/sun-roof.svg',
        feature: 'Sunroof',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '20+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Darren',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: 'assets/img/users/nick p.jpg',
          date: 'September 11, 2023',
          comment:
            'Super nice car and fun to drive. Elijah was extremely nice and accommodating. Will definitely be renting again next time I’m in town',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: 'assets/img/user2.jpg',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndReviews: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      cleanliness: 4.9,
      maintenance: 5.0,
      communication: 5.0,
      convenience: 5.0,
      accuracy: 5.0,
      totalRatings: 85,
    },
    pickup: [
      {
        select: 'pickup at car location',
        icon: 'assets/img/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: 'assets/img/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: 'assets/img/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: {
      main: 'assets/img/lexus/Lexus IS 2022-1.jpg',
      additional: [
        'assets/img/lexus/Lexus IS 2022-1.jpg',
        'assets/img/lexus/Lexus IS 2022-2.jpg',
        'assets/img/lexus/Lexus IS 2022-3.jpg',
        'assets/img/lexus/Lexus IS 2022-4.jpg',
      ],
    },

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: 'assets/img/user3.jpg',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: 'assets/img/user2.jpg',
        date: 'October 8, 2023',
        comment:
          'Anthony was great! Car was awesome! Seamless drop off, literally pulled up, popped the trunk, fist bump and that was it. Never had a quicker, smoother pickup before. Anthony was very flexible and accommodating as my departure kept changing. Rent from this guy! He is top notch!',
      },
    ],
    booking: {
      startDate: '11/06/2023',
      startTime: '10:00 AM',
      endDate: '11/09/2023',
      endTime: '10:00 AM',
      pickupReturnLocation: 'Los Angeles, CA 90005',
      discount: 19,
      cancellationPolicy: 'Free cancellation',
      distanceIncluded: 300,
      feePerAdditionalMile: 1.23,
      insurance: 'Insurance via Travelers',
    },
  },
  {
    brand: 'Lexus',
    name: 'Lexus ES 2023',
    rating: '4.90 (29 ratings)',
    pricePerDay: 126,

    mpg: {
      icon: 'assets/img/mpg.svg',
      detail: '44 MPG',
    },
    fuelType: {
      icon: 'assets/img/fuel.svg',
      detail: 'Hybrid (Premium)',
    },
    doors: {
      icon: 'assets/img/doors.svg',
      detail: 4,
    },
    seats: {
      icon: 'assets/img/seat.svg',
      detail: 5,
    },
    detail:
      'New 2023 Lexus Hybrid with gas prices on the rise you need a Hybrid that averages 36 plus MPG.  Lexus Es hybrid is real crowd pleaser and has safety and sophistication with Apple car play this car is ready for a road trip. book now while you still can sip on gas instead of guzzling gas…',
    features: [
      {
        icon: 'assets/img/apple-carplay.svg',
        feature: 'Apple CarPlay',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },

      {
        icon: 'assets/img/bluetooth.svg',
        feature: 'Bluetooth',
      },
      {
        icon: 'assets/img/gps.svg',
        feature: 'Gps',
      },

      {
        icon: 'assets/img/usb.svg',
        feature: 'USB Input',
      },
      {
        icon: 'assets/img/transmission.svg',
        feature: 'Automatic transmission',
      },
    ],

    description: {
      rules: 'Please, NO SMOKING...',
      guidelines:
        'Please bring the car back with a full tank of gas (Premium 91)',
      deluxeClass: {
        title: 'deluxe class',
        CTA: 'This exclusive car has additional safety checks for guests under 30.',
        class: [
          {
            heading: '20+ only',
            content: 'You must be at least 25 years old to book this car.',
          },
          {
            heading: 'Protection required for guests under 30',
            content:
              'You must book this car with the Minimum or Standard protection plan.',
          },
          {
            heading: 'Deposit required for guests under 30',
            content:
              'You’ll be charged a fully refundable deposit of $750 when you book this car. It will be refunded 3 days after the trip ends without incident.',
          },
        ],
      },
    },

    host: {
      name: 'Darren',
      rating: 5.0,
      trips: 10,
      joined: 'Aug 2017',
      responseTime: '1 minute',
      reviews: [
        {
          author: 'Nick P.',
          rating: 3,
          img: 'assets/img/users/nick p.jpg',
          date: 'September 11, 2023',
          comment:
            'Super nice car and fun to drive. Elijah was extremely nice and accommodating. Will definitely be renting again next time I’m in town',
        },
        {
          author: 'Burhan S.',
          rating: 4.9,
          img: 'assets/img/user2.jpg',
          date: 'September 11, 2023',
          comment:
            'Great car, the color is really nice and is a neck breaker. Would use again',
        },
      ],
    },
    extras: {
      mustBe25: true,
      automaticTransmission: true,
      longTermCar: true,
    },
    ratingsAndReviews: {
      basedOn: 'Based on 85 guest ratings',
      overallRating: 4.98,
      cleanliness: 4.9,
      maintenance: 5.0,
      communication: 5.0,
      convenience: 5.0,
      accuracy: 5.0,
      totalRatings: 85,
    },
    pickup: [
      {
        select: 'pickup at car location',
        icon: 'assets/img/car.svg',
        location: 'Los Angeles',
        price: 'free',
      },
      {
        select: 'pickup location',
        icon: 'assets/img/plane.svg',
        location: 'Airport',
        price: '$120.00',
      },
      {
        select: 'delivered to you',
        icon: 'assets/img/deliver.svg',
        location: 'Up to 10 miles',
        price: '$120.00',
      },
    ],

    img: {
      main: 'assets/img/lexus/Lexus IS 2022-1.jpg',
      additional: [
        'assets/img/lexus/Lexus IS 2022-1.jpg',
        'assets/img/lexus/Lexus IS 2022-2.jpg',
        'assets/img/lexus/Lexus IS 2022-3.jpg',
        'assets/img/lexus/Lexus IS 2022-4.jpg',
      ],
    },

    reviews: [
      {
        reviewer: 'Omar ',
        rating: 4.5,
        img: 'assets/img/user3.jpg',
        date: 'October 22, 2023',
        comment: 'Will be coming back soon. Thanks Darren',
      },
      {
        reviewer: 'Nicholas',
        rating: 4.1,
        img: 'assets/img/user2.jpg',
        date: 'October 8, 2023',
        comment:
          'Anthony was great! Car was awesome! Seamless drop off, literally pulled up, popped the trunk, fist bump and that was it. Never had a quicker, smoother pickup before. Anthony was very flexible and accommodating as my departure kept changing. Rent from this guy! He is top notch!',
      },
    ],
    booking: {
      startDate: '11/06/2023',
      startTime: '10:00 AM',
      endDate: '11/09/2023',
      endTime: '10:00 AM',
      pickupReturnLocation: 'Los Angeles, CA 90005',
      discount: 19,
      cancellationPolicy: 'Free cancellation',
      distanceIncluded: 300,
      feePerAdditionalMile: 1.23,
      insurance: 'Insurance via Travelers',
    },
  },
];
