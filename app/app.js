function share(shareTitle, shareText, shareUrl){
    if (navigator.share) {
        navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        })
      }
}