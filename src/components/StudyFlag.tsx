import Flag from '../model/flag'
interface StudyFlagProps {
  flag: Flag
}

function StudyFlag({ flag }: StudyFlagProps) {

  return (
    <div class="border rounded p-8 flex flex-col gap-4">

      <img class="shadow-md" src={flag.img} width="128px" height="128px" alt="image of the US flag" />
      <p class="font-bold text-2xl">{flag.name}</p>
      <p class="bg-neutral-100 p-4 rounded-full dark:bg-neutral-800">{flag.description}</p>
    </div>
  )
}
export default StudyFlag;
