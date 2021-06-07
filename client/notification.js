// document.getElementById("myBtn").addEventListener("click", function() {
//   send()
// });
  
  async function send() { 
    const pushSubscription = [
      {
        nome:'Leandro',
        key:{
          endpoint: 'https://fcm.googleapis.com/fcm/send/eBKUC41t46o:APA91bEQfzTMHu-OnqioaGkQRFmT5ZUC9utcpIB7MuvZoXT-9LnD1ionD4Vx2FVG7iddHxa8qCmv1cLaNZSBj-MNEUhRiSTc9tdyfVpxC-WHhNOl9Vi1TIC2H1XIB5DDzzegYpAmZCSy',
          expirationTime: null,
          keys: {
              p256dh: 'BBtg5IEugoZjwgvYywFxyk5SLA-i3a9RkcH1afjOXOSzOyVcWB_8rLCL_1cQHFFyc2ibb9cGhSCoZVk-DuEWy4c',
              auth: 'rtR6ncZpQJKtm02J2aCC9w'
          }
        }
      },
      {
        nome:'Leandro Águia',
        key:{
          endpoint: 'https://fcm.googleapis.com/fcm/send/e1DDHilbNnM:APA91bFrAyc6soaL01jym_pVVlLoU5DF1SOm_2HTUDX8dbUhQTNSuQ24pbL48OFnhbjcxTdV3rX-9RHdBemPFDrVHbMBOZnpQWtFV7z7Y1kz_szh8Jl_AHLakqb1fGoC6d8UsrCi3T9u',
          expirationTime: null,
          keys: {
              p256dh: 'BAZGGyXstBYyxL7v8LwhJg-ky_GK2T4s0PvvsI-476lOWJ3DemBzJdS5y7J4Vt-vEiEANRLp0wNr7q2IxbTphGw',
              auth: 'RtMII7p03wNj2dg_ThzxHw'
          }
        }
      },
      // {
      //   nome:'Fabio',
      //   key:{
      //     endpoint: 'https://fcm.googleapis.com/fcm/send/ejRNrIplKOw:APA91bGRoZdznTIPOkbrHYyNH6qtx4eAekGmuf_0g0Q-8O0q0EMl_6ptJX99NSjxkg1CnvmnHA5VH7B5cvJHNrB4OKY1-pR0yP4YVxv69hpzcTtiEKuFNnSdB1ZouBtG1JF3X-anwbJR',
      //     expirationTime: null,
      //     keys: {
      //         p256dh: 'BIXw9aGQZv4cV-BlVchSiAKf_H294WSrw7iNFTqmmUZGm8Gc9es_RVmOMfMCO9hw9J2x55_MYAk6PGNsYv2mBks',
      //         auth: '-SOxN5bJ0lGRdhZgMq3-wA'
      //     }
      //   }
      // },
      // {
      //   nome:'Fabio Internet Explore',
      //   key:{
      //     endpoint: 'https://bn3p.notify.windows.com/w/?token=BQYAAAAnhmJ994bnomeUTaV6Ys80cgEW3r7OnH2uoGm24g32VvaeLB8St0snOCoq55cYJB6BWhN%2bJXnwqgjyrcgGZgZq1ne0R2TzrxWhCfExXvnw7F2PUo8pIfKkFxvs8rxdRUmBsDfpqvtY5%2bajKt0Q6bT%2fgxEwC9oVvgLvE1qtxu5ds8RicK96dKepP%2beCx5d3C4dlx5C5fmBtUZmyjM2wipWMtlQPNDL6QnrwzQcFjzBszHacNmvKzaoue4CN1IakynKdEirCHienVcvU%2bTbUIiDA23NbMO9KFSFCfe7i%2fEYdXpWQHdCVgsQKqhnlQGeuWxnUMSzcc9wws4uBfcn9g1ks',
      //     expirationTime: null,
      //     keys: {
      //         p256dh: 'BNe88JaBHYJazpOgdw8LUNuplG8XfOtwV2uN4PxC3RAVqHh_R3Racr7plNiqASo1euqHcp7hLsghehTDYbaoX2Y',
      //         auth: 'AogD7LwoQr0GsD0pgEzuHA'
      //     }
      //   }
      // }
    ]
  
    // Send Push Notification
    console.log("Sending Push...");
    await fetch("/subscribe", {
      method: "POST",
      body: JSON.stringify(pushSubscription),
      headers: {
        "content-type": "application/json"
      }
    });
    console.log("Push Sent...");
  }

