import { Analytics } from "@vercel/analytics/react";
const React = require("react");
export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <>
      <Analytics />

    </>

  ]);
};