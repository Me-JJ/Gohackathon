"use client";
import { List, ListItem, Card } from "@material-tailwind/react";

export default function ChallengeList() {
  const colors = ["#00487C", "#004643", "#392F5A", "#90BE6D"];
  return (
    <Card className="w-96 ">
      <List>
        <a
          href="#"
          className="text-lg sm:text-xl md:text-3xl font-semibold p-3"
        >
          <ListItem
            className="hover:scale-105 transition duration-500 hover:bg-light-green-100"
            style={{
              color: `${colors[1]}`,
            }}
          >
            POTD
          </ListItem>
        </a>
        <a
          href="#"
          className="text-lg sm:text-xl md:text-3xl font-semibold p-3 "
        >
          <ListItem
            className="hover:scale-105 transition duration-500 hover:bg-orange-100"
            style={{
              color: `${colors[0]}`,
            }}
          >
            Interview Questions
          </ListItem>
        </a>
        <a
          href="#"
          className="text-lg sm:text-xl md:text-3xl font-semibold p-3"
        >
          <ListItem
            className="hover:scale-105 transition duration-500 hover:bg-light-blue-100"
            style={{
              color: `${colors[2]}`,
            }}
          >
            DSA Problems
          </ListItem>
        </a>
      </List>
    </Card>
  );
}
