const React = require("react")
export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <>
      <script async key={'Globlagtag'} src="https://www.googletagmanager.com/gtag/js?id=UA-139158593-2"></script>
      <script key={'gtag'} dangerouslySetInnerHTML={{ __html: ` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-139158593-2');`}}>

      </script>


    </>

  ])
}