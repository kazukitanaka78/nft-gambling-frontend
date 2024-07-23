interface ThirdProps {
    className? : string
}

export default function Third({ className }:ThirdProps) {
  return (
    <svg
      width="61"
      height="73"
      viewBox="0 0 61 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.6611 62.8006L12.6611 62.8006L12.6674 62.8023C16.9554 63.9338 21.2749 64.5 25.625 64.5C31.5725 64.5 36.4932 63.5491 40.3598 61.6157C44.2024 59.6945 47.0829 57.1877 48.9694 54.0842L48.9716 54.0805C50.8452 50.9377 51.7851 47.5757 51.7851 44.0028C51.7851 38.4969 49.7809 33.9633 45.7753 30.4432C43.1437 28.1307 39.7102 26.593 35.4985 25.8068L48.8294 10.6206L48.9537 10.4791V10.2907V1V0.5H48.4537H5.09691H4.59691V1V12.5028V13.0028H5.09691H30.3413L18.3484 26.5948L18.2233 26.7365V26.9256V36.3933V36.8933H18.7233H25.2711C29.3085 36.8933 32.124 37.5705 33.8215 38.8299C35.5177 40.0884 36.3624 41.7948 36.3624 44.0028C36.3624 46.3134 35.413 48.1067 33.4827 49.4303C31.5304 50.769 28.8107 51.4663 25.2711 51.4663C22.1391 51.4663 19.0347 50.9734 15.9561 49.986C12.8738 48.9973 10.1796 47.663 7.86792 45.9871L7.39388 45.6434L7.12867 46.1654L1.55423 57.1373L1.36019 57.5192L1.70785 57.7695C4.71414 59.9341 8.36882 61.6083 12.6611 62.8006Z"
        stroke="#E7A000"
      />
      <path
        d="M34.625 73C30.3188 73 26.0421 72.4396 21.7949 71.3188C17.5478 70.139 13.9494 68.4874 11 66.3638L16.5744 55.3919C18.934 57.1025 21.677 58.4593 24.8034 59.4621C27.9298 60.4649 31.0857 60.9663 34.2711 60.9663C37.8694 60.9663 40.7008 60.2584 42.7654 58.8427C44.8301 57.427 45.8624 55.4803 45.8624 53.0028C45.8624 50.6433 44.948 48.7851 43.1194 47.4284C41.2907 46.0716 38.3413 45.3933 34.2711 45.3933H27.7233V35.9256L44.9775 16.3708L46.5702 21.5028H14.0969V10H57.4537V19.2907L40.2879 38.8455L33.0323 34.6868H37.191C44.8006 34.6868 50.552 36.3975 54.4452 39.8188C58.3385 43.2402 60.2851 47.6348 60.2851 53.0028C60.2851 56.4831 59.3708 59.757 57.5421 62.8244C55.7135 65.8329 52.9115 68.2809 49.1362 70.1685C45.361 72.0562 40.5239 73 34.625 73Z"
        fill="white"
      />
    </svg>
  );
}