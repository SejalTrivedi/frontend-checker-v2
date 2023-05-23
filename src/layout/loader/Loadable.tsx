import React, { Suspense } from 'react';

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<></>}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
