const getTooltipText = (tooltipId: string) => {
  switch (tooltipId) {
    case 'music':
      return 'Music Player'
    case 'merch':
      return 'Merch'
    case 'video':
      return 'Videos'
    case 'live-show':
      return 'Live Show'
    case 'subscribe':
      return 'Subscribe'
    case 'plannet':
      return 'SMS'
    default:
      return null
  }
}

export default getTooltipText
