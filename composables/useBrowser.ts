export function useBrowser() {
  const isSafari = (
    userAgent = navigator.userAgent,
    vendor = navigator.vendor,
  ) => {
    return /Safari/.test(userAgent) && /Apple Computer/.test(vendor);
  };

  const isMobile = (userAgent = navigator.userAgent) => {
    return (
      userAgent.match(/Android/i) !== null ||
      userAgent.match(/webOS/i) !== null ||
      userAgent.match(/iPhone/i) !== null ||
      userAgent.match(/iPad/i) !== null ||
      userAgent.match(/iPod/i) !== null ||
      userAgent.match(/BlackBerry/i) !== null ||
      userAgent.match(/Windows Phone/i) !== null
    );
  };

  return {
    isSafari,
    isMobile,
  };
}
