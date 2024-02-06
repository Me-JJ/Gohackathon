"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

export function PopularCard({ src, heading, sub }) {
  return (
    <Card className="mt-6 w-96 mx-5 bg-gray-900 ">
      <CardHeader color="blue-gray" className="relative h-56 m-5">
        <Image
          src={src}
          alt="popular-skills"
          priority={false}
          className="bg-gray-200"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h3"
          color="green"
          className="mb-2 font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl"
        >
          {heading}
        </Typography>
        <Typography
          variant="paragraph"
          className="text-justify text-white
        text-xs sm:test-sm md:text-base"
        >
          {sub}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          color="green"
          variant="gradient"
          fullWidth
          className="text-gray-200"
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
