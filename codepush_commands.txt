react-native bundle --platform ios --entry-file index.ios.js --bundle-output codepush.js --dev false

code-push release CineHorarios codepush.js 1.0 --mandatory true