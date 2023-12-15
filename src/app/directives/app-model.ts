// export interface IBrands {
//   brandName: string;
//   backgroundImg: string;
//   curvedImg: string;
//   brandDetail: {
//     description: {
//       title: string;
//       p: string;
//       main1: string;
//       main2: string;
//     };
//     features: {
//       title: string;
//       content: string;
//     }[];
//     button: string;
//     legend: {
//       img: string;
//       content: string;
//       p: string;
//     };
//     top: {
//       heading: string;
//       top: string;
//       button: string;
//       topCars: {
//         name: string;
//         content: string;
//       }[];
//     };
//   };

//   brandReviews: {
//     username: string;
//     img: string;
//     carModel: string;
//     rating: number;
//     date: string;
//     comment: string;
//   }[];

//   brandFaq: {
//     question: string;
//     expanded: boolean;
//     answer: string;
//   }[];
// }


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

export interface IBooking {
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
}

export interface ICars {
  brand: string;
  id: string;
  name: string;
  category: string;
  rating: string;
  pricePerDay: number;

  topDetails: {
    type: string;
    icon: string;
    detail: string | number;
  }[];

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

  ratingsAndBasedOn: {
    basedOn: string;
    overallRating: number;
    totalRatings: number;
  };

  ratingsAndReviews: {
    label: string;
    value: string;
  }[];

  pickup: {
    select: string;
    icon: string;
    location: string;
    price: string;
  }[];

  img: string[];

  reviews: {
    reviewer: string;
    rating: number;
    img: string;
    date: string;
    comment: string;
  }[];
}


export interface IBrandDetailDescription {
  title: string;
  p: string;
  main1: string;
  main2: string;
}

export interface IBrandDetailFeature {
  title: string;
  content: string;
}

export interface IBrandDetail {
  description: IBrandDetailDescription;
  features: IBrandDetailFeature[];
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
}

export interface IBrandReview {
  username: string;
  img: string;
  carModel: string;
  rating: number;
  date: string;
  comment: string;
}

export interface IBrandFaq {
  question: string;
  expanded: boolean;
  answer: string;
}

export interface IBrandCars {
  brand: string;
  id: string;
  img: string;
  category: string,
  name: string;
  rating: string;
  pricePerDay: number;
  mpg?: {
    icon: string;
    detail: string;
  };
  fuelType?: {
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
}

export interface IBrand {
  brandName: string;
  backgroundImg: string;
  curvedImg: string;
  brandDetail: IBrandDetail;
  brandReviews: IBrandReview[];
  brandFaq: IBrandFaq[];
  cars: IBrandCars[];
}
