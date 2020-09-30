const functions = require('firebase-functions');
const Filter = require('bad-words');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.detectEvilUsers = functions.firestore
       .document('messages/{msgId}')
       .onCreate(async (doc, ctx) => {

        const filter = new Filter();
        const { text, uid } = doc.data(); 


        if (filter.isProfane(text)) {

            const cleaned = filter.clean(text);
            await doc.ref.update({text: `Your services has been cancelled for violating our terms and conditions. Please contact admin to restart using app. ${cleaned}`});

            await db.collection('banned').doc(uid).set({});
        } 

        const userRef = db.collection('users').doc(uid)

        const userData = (await userRef.get()).data();

        if (userData.msgCount >= 7) {
            await db.collection('banned').doc(uid).set({});
        } else {
            await userRef.set({ msgCount: (userData.msgCount || 0) + 1 })
        }

});


exports.sendPushNotifications = functions.firestore
.document('messages/{msgId}').onCreate(async (doc, ctx) => {

    const { text, photoURL } = doc.data();
    console.log("fired function on creating new doc" , text)

    const payload = {
        notification: {
          title: 'You have a new follower!',
          body: 'Woww!!!!!!',
          icon: photoURL
        }
      };

      const registrationToken = 'dU0C7rfdMo5TkJrISOXONo:APA91bHHLHfH30prrIr0EBVY90T9rImyUr-LB6zzz2jm0-EugLnhoaBtfZoJup9Y0wij385OJKU3BMxXRz00vscExnCxExV3PTmhA8Xh7pGb_Nz17A5gjS7XeguLO5pQ4qx1G-TRCFEW'

      
      await admin.messaging().sendToDevice(registrationToken, payload)

      console.log("notification sent")

})
