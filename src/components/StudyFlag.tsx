import Flag from '../model/flag'
interface StudyFlagProps {
  flag: Flag
}

function StudyFlag({ flag }: StudyFlagProps) {

  return (
    <div class="border rounded md:p-4 items-center text-center p-2 flex flex-col gap-4">

      <div>
        <img class="shadow-md" src={flag.img} width="256px" height="256px" alt="image of the US flag" />
        <p class="font-bold text-2xl">{flag.name}</p>

      </div>
      <p class="bg-neutral-100 h-full text-left p-4 md:rounded-xl dark:bg-neutral-800">{flag.description}</p>
    </div>
  )
}
export default StudyFlag;
