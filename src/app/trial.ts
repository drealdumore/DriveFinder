import { Cars } from "src/api/cars/data";

// Assuming Cars is an array and you want to access data for the first car
const firstCar = Cars[0];

// Accessing basic information
const brand = firstCar?.brand;
const name = firstCar?.name;
const category = firstCar?.category;
const rating = firstCar?.rating;
const pricePerDay = firstCar?.pricePerDay;

// Accessing nested objects with optional chaining
const mpgIcon = firstCar?.mpg?.icon;
const mpgDetail = firstCar?.mpg?.detail;

const fuelTypeIcon = firstCar?.fuelType?.icon;
const fuelTypeDetail = firstCar?.fuelType?.detail;

const doorsIcon = firstCar?.doors?.icon;
const doorsDetail = firstCar?.doors?.detail;

const seatsIcon = firstCar?.seats?.icon;
const seatsDetail = firstCar?.seats?.detail;

// Accessing features array
const features = firstCar?.features?.map(feature => ({
  icon: feature.icon,
  feature: feature.feature,
}));

// Accessing description object
const rules = firstCar?.description?.rules;
const guidelines = firstCar?.description?.guidelines;

// Accessing deluxeClass object
const deluxeClassTitle = firstCar?.description?.deluxeClass?.title;
const deluxeClassCTA = firstCar?.description?.deluxeClass?.CTA;
const deluxeClassItems = firstCar?.description?.deluxeClass?.class?.map(item => ({
  heading: item?.heading,
  content: item?.content,
}));

// Accessing host object
const hostName = firstCar?.host?.name;
const hostRating = firstCar?.host?.rating;
const hostTrips = firstCar?.host?.trips;
const hostJoined = firstCar?.host?.joined;
const hostResponseTime = firstCar?.host?.responseTime;

// Accessing reviews array
const reviews = firstCar?.host?.reviews?.map(review => ({
  author: review?.author,
  rating: review?.rating,
  img: review?.img,
  date: review?.date,
  comment: review?.comment,
}));

// Accessing extras object
const mustBe25 = firstCar?.extras?.mustBe25;
const automaticTransmission = firstCar?.extras?.automaticTransmission;
const longTermCar = firstCar?.extras?.longTermCar;

// Accessing ratingsAndReviews object
const basedOn = firstCar?.ratingsAndReviews?.basedOn;
const overallRating = firstCar?.ratingsAndReviews?.overallRating;
const cleanlinessRating = firstCar?.ratingsAndReviews?.cleanliness;
const maintenanceRating = firstCar?.ratingsAndReviews?.maintenance;
const communicationRating = firstCar?.ratingsAndReviews?.communication;
const convenienceRating = firstCar?.ratingsAndReviews?.convenience;
const accuracyRating = firstCar?.ratingsAndReviews?.accuracy;
const totalRatings = firstCar?.ratingsAndReviews?.totalRatings;

// Accessing pickup array
const pickups = firstCar?.pickup?.map(pickup => ({
  select: pickup?.select,
  icon: pickup?.icon,
  location: pickup?.location,
  price: pickup?.price,
}));

// Accessing img object
const mainImg = firstCar?.img?.main;
const additionalImgs = firstCar?.img?.additional;

// Accessing reviews array under the car object
const carReviews = firstCar?.reviews?.map(carReview => ({
  reviewer: carReview?.reviewer,
  rating: carReview?.rating,
  img: carReview?.img,
  date: carReview?.date,
  comment: carReview?.comment,
}));

