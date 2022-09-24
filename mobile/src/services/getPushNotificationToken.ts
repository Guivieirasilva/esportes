import * as Notifications from 'expo-notifications'   

export async function getPushnotificationToken(){
   const { granted } = await Notifications.getPermissionsAsync();

   if(!granted){
      await Notifications.requestPermissionsAsync();
   }

   if(granted){
      const pushToken = await Notifications.getExpoPushTokenAsync();
      console.log("Nova notificação => ", pushToken.data);
      
      return pushToken.data
   }
}