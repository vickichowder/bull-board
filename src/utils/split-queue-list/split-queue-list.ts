const splitQueuesBy = ',';

export const splitQueueList = (queueList: string): string[] => {
  const list = queueList.split(splitQueuesBy)

  if (!list.length) throw Error('Queue list must be defined!')

  return list
}
