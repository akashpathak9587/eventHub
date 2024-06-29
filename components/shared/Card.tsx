import { IEvent } from "@/lib/database/models/event.model";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};
const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;
    const isEventCreateor = userId === event.organizer._id as string;
    return (
        <div className="group retative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
            <Link href={`/events/${event._id}`} style={{backgroundImage: `url(${event.imageUrl})`}} className="flex-center flex-row bg-gray-50 bg-cover bg-center text-gray-500" />
      </div>
  )
};

export default Card;
