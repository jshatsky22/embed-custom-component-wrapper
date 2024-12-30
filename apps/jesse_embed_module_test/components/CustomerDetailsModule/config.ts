import { type ComponentConfig } from "@superblocksteam/custom-components";

export default {
  // DO NOT CHANGE THE ID ONCE THE COMPONENT HAS BEEN REGISTERED!
  id: "3484133e-ce79-480b-8f51-d34d30fd3e0a",
  name: "CustomerDetailsModule",
  displayName: "Customer Details (Module)",
  componentPath: "components/CustomerDetailsModule/component.tsx",
  properties: [
    {
      path: "customerId",
      dataType: "number",
      propertiesPanelDisplay: { label: "Customer ID", controlType: "text" },
      isExternallyReadable: true,
      isExternallySettable: true,
    },
  ],
  events: [
    {
      label: "On customer update",
      path: "onCustomerUpdate",
    },
  ],
  gridDimensions: {
    initialColumns: 50,
    initialRows: 30,
  },
} satisfies ComponentConfig;
