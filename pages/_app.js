import App from "next/app";
import { AuthProvider } from "../providers/Auth";
import cookie from "cookie";
import "antd/dist/antd.css";
import "../styles/vars.css";
import "../styles/global.css";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
library.add(fab, fas);

function MyApp({ Component, pageProps, authenticated }) {
  return (
    <AuthProvider authenticated={authenticated}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//

MyApp.getInitialProps = async (appContext) => {
  let authenticated = false;
  const request = appContext.ctx.req;
  if (request) {
    request.cookies = cookie.parse(request.headers.cookie || "");
    authenticated = !!request.cookies.session;
  }

  // Call the page's `getInitialProps` and fill `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, authenticated };
};

export default MyApp;

/* export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let NavigationMenu, MainNav, BreadCrumb, footer;
  if (router.route.startsWith("/user/")) {
    NavigationMenu = <UserMenu defaultSelectedKey={router.pathname} />;
    MainNav = <MainNavbar />;
    BreadCrumb = <BreadCrumbs pathname={router.route} />;
    footer = <TemplateFooter />;
  } else {
    NavigationMenu = <MainMenu defaultSelectedKey={router.pathname} />;
    MainNav = <MainNavbar />;
    BreadCrumb = <BreadCrumbs pathname={router.route} />;
    footer = <TemplateFooter />;
  }

  return (
    <AuthProvider>
      
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <div className="logo">
            <img src="/images/fastrax-logo.png" alt="Fastrax Logo" />
          </div>
          {NavigationMenu}
          <div className="sideBottom">
            <div className="sideBottom-shape"></div>
          </div>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background header-nav"
            style={{ padding: 0 }}
          >
            {MainNav}
          </Header>
          <Content style={{ margin: "0 16px" }}>
            {BreadCrumb}
            <div className="site-layout-background" style={{ minHeight: 360 }}>
              <Component {...pageProps} />
            </div>
          </Content>
          <Divider dashed className="features-divider" />
          {footer}
        </Layout>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </Layout>
    </AuthProvider>
  );
} */