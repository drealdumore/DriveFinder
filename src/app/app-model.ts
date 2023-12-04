export interface ICars {
  brand: string;
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
