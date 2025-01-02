# NextAuth session undefined in getServerSideProps within a component

This repository demonstrates a common issue when using NextAuth.js with `getServerSideProps` within a component rather than a page.  The `session` object returned by `unstable_getServerSession` is unexpectedly undefined.

## Problem

The standard `getServerSideProps` function works perfectly within pages but returns an undefined session when used in a component. This is because `getServerSideProps` is a page-level function and doesn't have access to the context within a component.  This example shows a component attempting to access NextAuth session data resulting in an undefined session object.

## Solution

The solution is to move the session retrieval logic to a page and pass the session data as a prop to the component. This allows the component to access the session without needing direct access to the `getServerSideProps` context. 