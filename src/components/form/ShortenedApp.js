import React from "react";
import useUrls from "./hooks/useUrls";
import ShortenedFormMaster from "./ShortenedFormMaster";
import LinkList from "./LinkList";
import Loader from "./Loader";
import { ErrorMessage } from "./ErrorMessage";
import {
  ShortenedAppContainer,
  ShortenedWrapper,
} from "./ShortenedAppElements";

const ShortenedApp = () => {
  const { appError, isLoading, results, submitUrl, setResults } = useUrls();

  return (
    <ShortenedAppContainer id="try-app">
      <ShortenedWrapper>
        <ShortenedFormMaster onUrlSubmit={submitUrl} />
        {appError ? (
          <ErrorMessage margin="1rem auto" fontSize="1rem">
            {appError}
          </ErrorMessage>
        ) : null}
        {isLoading ? <Loader /> : null}
        <LinkList results={results} setResults={setResults} />
      </ShortenedWrapper>
    </ShortenedAppContainer>
  );
};

export default ShortenedApp;
