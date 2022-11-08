import { WebView } from 'react-native-webview';

export default function Details({navigation, route}) {
    return (
        <WebView source={{uri : route.params.url}} />
    )
}