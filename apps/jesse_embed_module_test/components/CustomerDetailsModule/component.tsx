import React, { useRef, useCallback } from "react";
import {
  useSuperblocksContext,
  useSuperblocksIsLoading,
} from "@superblocksteam/custom-components";
import { type Props, type EventTriggers } from "./types";
import { SuperblocksEmbed } from "@superblocksteam/embed-react";

export default function Component({ customerId }: Props) {
  // If any of your component's properties are connected to APIs, you might want to show a loading indicator while the data is
  // loading. The `useSuperblocksIsLoading` hook returns a boolean that indicates whether this is the case.
  const isLoading = useSuperblocksIsLoading();
  const {
    updateProperties,
    events: { onCustomerUpdate },
  } = useSuperblocksContext<Props, EventTriggers>();

  const properties = {
    customerId,
  };

  // handle the custom events triggered from the embedded app
  const handleCustomEvents = (eventName, payload) => {
    console.log(
      "just got an update from the embedded app!",
      eventName,
      payload
    );
    onCustomerUpdate();
  };

  // trigger an event in the app
  // this is not currently working - myAppRef is undefined, not sure why
  // const myAppRef = useRef();

  // const refreshCustomerData = useCallback(() => {
  //   if (myAppRef.current) {
  //     myAppRef.current.trigger("refetchCustomerData");
  //   } else {
  //     console.warn("myAppRef.current is not defined");
  //   }
  // }, []);

  return (
    <>
      {/* <button
        onClick={refreshCustomerData}
        style={{
          float: "right",
          marginRight: "40px",
          marginTop: "10px",
          marginBottom: "10px",
        }}>
        Refresh customer data
      </button> */}
      <SuperblocksEmbed
        src={`https://app.superblocks.com/embed/applications/12a07aaa-dcb9-473a-807c-4f2efb0952e7/customer-detail`}
        properties={properties}
        onEvent={handleCustomEvents}
      />{" "}
    </>
  );
}
