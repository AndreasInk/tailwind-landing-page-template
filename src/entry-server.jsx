import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import Home from './pages/Home';
import HeroPro from './partials/HeroPro';
import NotFound from './partials/NotFound';

// Render the same homepage used by the client so crawlers and no-JS readers
// receive product content without maintaining a separate copy of the page.
export function renderPage(pathname = '/') {
  const Page = pathname === '/' ? Home : pathname === '/pricing' ? HeroPro : NotFound;
  return renderToString(<StaticRouter location={pathname}><Page /></StaticRouter>);
}
