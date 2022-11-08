import {WebView} from 'react-native-webview';

export default function Song({navigation, route}) {
    return (
        <WebView source={{uri : route.params.url1}}/>
    )
}