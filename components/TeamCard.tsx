"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";

const TeamCard = () => {
  return (
    <Card shadow="sm" className="min-w-[250px] first:ms-5" >
      <CardBody className="overflow-visible p-0 relative w-full h-[240px]">
        <Image
        fill
          alt={"team members"}
          className="object-cover object-center"
          src={"/img-1.png"}
        />
      </CardBody>
      <CardFooter className="text-small flex-col gap-2">
        <h4>Name</h4>
        <p className="text-default-500">Designation</p>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
