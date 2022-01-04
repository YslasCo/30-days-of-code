// I set up a react native app, expo and got react navigation set up in two days.  Feels good.  Lets see where I can take this.
// Day 3 is minimum get a git repository set up and push it.

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.textStyle} >Home Screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#4169e1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textStyle: {
//     color:'#ffefd5',
//     fontSize: 50,
//   }
// });
import * as React from 'react';
import { Text, TextInput, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image 
      style={{width: 150, height: 150}}
      source={require('./assets/ape2.png')}/>
      {/* C:\Users\jrysl\OneDrive\Desktop\30DaysCode\assets\ape2.png */}
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Button title="Page 3"
        onPress={() => navigation.navigate('Page3')}
        />
      <Button title="Page 4"
        onPress={() => navigation.navigate('Page4')}
        />
   {/* This button I added, no copy paste from react navigation */}
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}


function Page3({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Page 3</Text>
      <Button
        title="Page 3"
        onPress={() => navigation.navigate('Page 3')}
      />
      <Image source={require('./assets/ape2.png')}/>
    </View>
  );
}

function Page4({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Page 4</Text>
      <Button
        title="Page 4"
        onPress={() => navigation.navigate('Page 4')}
      />
    </View>
  );
}

// Added these pages and buttons to the App

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen name="Page3" component={Page3} />
        {/* Added page 3 */}
        <Stack.Screen name="Page4" component={Page4} />
{/* Added page 4 too */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

