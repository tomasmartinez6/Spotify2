import { StyleSheet, SafeAreaView, Text, Pressable, View, FlatList, Image } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Images from "./assets/Images/images";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AppOld( {navigation} ) {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);
  const RenderSong = ({item, index}) => {
    return (
      <Pressable style={styles.songView} onPress={() => navigation.navigate("Details", { url: item.external_urls.spotify})}>
        <View style={styles.numberAndImage}> 
          <Pressable onPress = {(e) => {
            e.stopPropagation()
            navigation.navigate("Song", { url1: item.preview_url})}  } >
           <Ionicons style={styles.number} name="play-circle" size={32} color="green" />
          </Pressable>
          <Image style={styles.albumImage} source={item.album.images}/>
        </View>
        <View style={styles.info}> 
          <Text style={styles.songName} numberOfLines={1}> {item.name} </Text>
          <Text style={styles.artistName}> {item.artists[0].name}</Text>
        </View>
        <View style={styles.album}> 
          <Text style={styles.albumName} numberOfLines={1}> {item.album.name} </Text>
        </View>
        <View style={styles.length}>
          <Text style={styles.songLength}> {item.duration_ms} </Text>
        </View>
      </Pressable>
    )
  }

  if(token) {
    return(
    <SafeAreaView style={styles.container}>
      <View style={styles.top}> 
        <Image style={styles.spotifyLogo} source={(Images.spotify)}/>
        <Text style={styles.tracks}> My Top Tracks </Text>
      </View>
      <View style={styles.list}>  
        <FlatList
           style={styles.mainContainer}
           data={tracks}
           renderItem={RenderSong}
           keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
     )
  } else {
    return(
      <SafeAreaView style={styles.container}>
        <Pressable style={styles.mainButton}
            onPress={() =>
            getSpotifyAuth()
            }>
          <View style={styles.insideButton}>
            <Image style={styles.spotifyLogo} source={(Images.spotify)}/>
            <Text style={styles.connect}> CONNECT WITH SPOTIFY</Text>
          </View>
        </Pressable>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  mainButton: {
    flexDirection: "row",
    backgroundColor: Themes.colors.spotify,
    borderRadius: 100,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connect: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  list: {
    flex: 20,
    flexDirection: 'row',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  albumName: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'white',
    },
  songView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 19,
    flex: 1,
  },
  number: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Themes.colors.spotify,
  },
  albumImage: {
    marginLeft: 5,
    height: 50,
    width: 50,
  },
  info: {
    flexDirection: "column",
    marginRight: 20,
    width: "40%"
  },
  songName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  artistName: {
    fontSize: 12,
    color: 'white',
  },
  albumName: {
    fontSize: 12,
    color: 'white',
  },
  songLength: {
    fontSize: 12,
    color: 'white',
  },
  album: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20%"
  },
  numberAndImage: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%"
  },
  length: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%"
  },
  spotifyLogo: {
    width: 20,
    height: 20,
  },
  tracks: {
    fontSize: 20,
    color: 'white',
    fontWeight: "bold"
  }
});
