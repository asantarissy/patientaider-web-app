import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import qs from 'qs';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Languages from './languages';
import 'normalize.css';

import Header from './header';

const Main = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0.5rem;
`;

const Footer = styled.div`
  padding: 1rem;

  p {
    text-align: center;
    line-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function translations(location, path) {
  const map = {
    disclaimer: {
      en:
        'This application was created as a guide to educate and inform a patient and their family and/or friends during a hospital stay. It is informational in nature and is not intended as a substitute for the professional advice of a physician, attorney or other advisor.',
      es:
        'Esta aplicación fue creada como una guía para educar e informar a un paciente y su familia y/o amigos durante una estadía en el hospital. Es de carácter informativo y no pretende ser un sustituto del asesoramiento profesional de un médico, abogado u otro asesor.',
      // eslint-disable-next-line prettier/prettier
      zh:
        '本應用程式的設計宗旨，是作為住院期間可教育病人及其家人和/或朋友，或為其提供資訊之指南。其內容屬於參考性質，無法取代醫師、律師或其他顧問提供的專業意見。',
      ar:
        'تم إنشاء هذا التطبيق كدليل لتثقيف وإبلاغ المريض وأسرهم و / أو أصدقائهم أثناء الإقامة في المستشفى. إنها معلوماتية بطبيعتها وليس المقصود بها أن تكون بديلاً عن المشورة المهنية للطبيب أو المحامي أو مستشار آخر',
    },
    poweredBy: {
      en: 'powered by',
      es: 'energizado por',
      zh: '技術支援',
      ar: 'مترجم باللغة',
    },
  };

  const language =
    qs.parse(location.search, {
      ignoreQueryPrefix: true,
    }).lang || 'en';

  return map[path][language];
}

const Layout = ({ children, location, showLanguages }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
          <script>
            {`
            (function(w, d){
              var id='embedly-platform', n = 'script';
              if (!d.getElementById(id)){
                w.embedly = w.embedly || function () { (w.embedly.q = w.embedly.q || []).push(arguments); };
                var e = d.createElement(n); e.id = id; e.async=1;
                e.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cdn.embedly.com/widgets/platform.js';
                var s = d.getElementsByTagName(n)[0];
                s.parentNode.insertBefore(e, s);
              }
            })(window, document);
            `}
          </script>
          <link
            href="https://fonts.googleapis.com/css?family=Rubik"
            rel="stylesheet"
          />
          <style>
            {`

            * {
              box-sizing: border-box;
            }

            html {
              font-size: 16px;
            }

            body {
              font-family: 'Rubik', sans-serif;
              font-weight: 400;
              line-height: 1.45rem;
              color: #333;
              padding-bottom: 1rem;
            }

            body, html {
              height: 100%;
            }

            p {margin-bottom: 1.3em;}

            h1, h2, h3, h4 {
              margin: 1.5rem 0;
              font-weight: inherit;
              line-height: 1.2rem;
            }

            h1 {
              margin-top: 0;
              font-size: 2.074rem;
              line-height: 2rem;
            }

            h2 {font-size: 1.728rem; line-height: 2rem}

            h3 {font-size: 1.44rem;}

            h4 {font-size: 1.2rem;}

            small {font-size: 0.833rem;}
            sup {font-size: 0.578rem;}
            `}
          </style>

          <style>
            {`
              a {
                color: rgb(0, 87, 184);
              }
            `}
          </style>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} location={location} />
        <Main>{children}</Main>
        <hr />
        <Footer>
          <small>{translations(location, 'disclaimer')}</small>
          <br />
          <p>
            <small>
              {translations(location, 'poweredBy')}
              &nbsp;
            </small>
            <img
              alt="Patient Safety Movement Foundation"
              style={{ height: '2rem', width: 'auto' }}
              src="https://patientsafetymovement.org/wp-content/uploads/2017/08/Patient_Safety_Movement_logo_notag.png"
            />
          </p>
          <p>
            <a
              href="https://www.contentful.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
                style={{ maxWidth: '100px', width: '100%' }}
                alt="Powered by Contentful"
              />
            </a>
          </p>
          {showLanguages && (
            <p>
              <Languages location={location} />
            </p>
          )}
        </Footer>
      </>
    )}
  />
);

Layout.defaultProps = {
  showLanguages: true,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired, // eslint-disable-line
  showLanguages: PropTypes.bool,
};

export default Layout;
