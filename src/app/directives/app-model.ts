export interface IBrands {
  brandDetail: {
    brandName:string;
    description: {
      title: string;
      p: string;
      main1: string;
      main2: string;
    };
    features: {
      title: string;
      content: string;
    }[];
    button: string;
    legend: {
      img: string;
      content: string;
      p: string;
    };
    top: {
      heading: string;
      top: string;
      button: string;
      topCars: {
        name: string;
        content: string;
      }[];
    };
  };

  brandReviews: {
    username: string;
    img: string;
    carModel: string;
    rating: number;
    date: string;
    comment: string;
  }[];

  brandFaq: {
    question: string;
    answer: string;
  }[];
}

export interface ICars {
  brand: string;
  category: string;
  name: string;
  rating: string;
  pricePerDay: number;

  mpg: {
    icon: string;
    detail: string;
  };
  fuelType: {
    icon: string;
    detail: string;
  };
  doors: {
    icon: string;
    detail: number;
  };
  seats: {
    icon: string;
    detail: number;
  };
  detail: string;
  features: {
    icon: string;
    feature: string;
  }[];

  description: {
    rules: string;
    guidelines: string;
    deluxeClass: {
      title: string;
      CTA: string;
      class: {
        heading: string;
        content: string;
      }[];
    };
  };

  host: {
    name: string;
    rating: number;
    trips: number;
    joined: string;
    responseTime: string;
    reviews: {
      author: string;
      rating: number;
      img: string;
      date: string;
      comment: string;
    }[];
  };

  extras: {
    mustBe25: boolean;
    automaticTransmission: boolean;
    longTermCar: boolean;
  };

  ratingsAndReviews: {
    basedOn: string;
    overallRating: number;
    cleanliness: number;
    maintenance: number;
    communication: number;
    convenience: number;
    accuracy: number;
    totalRatings: number;
  };

  pickup: {
    select: string;
    icon: string;
    location: string;
    price: string;
  }[];

  img: {
    main: string;
    additional: string[];
  };

  reviews: {
    reviewer: string;
    rating: number;
    img: string;
    date: string;
    comment: string;
  }[];

  booking: {
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    pickupReturnLocation: string;
    discount: number;
    cancellationPolicy: string;
    distanceIncluded: number;
    feePerAdditionalMile: number;
    insurance: string;
  };
}

export interface IFaq {
  question: string;
  answer: string;
  expanded: boolean;
}

export interface IReview {
  username: string;
  img: string;
  carModel: string;
  rating: number;
  date: string;
  comment: string;
}

export interface IUser {
  name: string;
  img: string;
  location: string;
  rating: number;
  work: string;
  school: string;
  languages: string;
  email: string;
  phone: string;
  about: string;
  icon: string;
  toDrive: string;
  Popup: string;
}

export interface ICarousel {
  imgUrl: string;
  title: string;
  content: string;
  link: string;
}
