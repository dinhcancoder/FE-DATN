import { IonIcon } from '@ionic/react'

function Video_Watch() {
  return (
    <div>
      <>
        <div className='mx-auto max-w-[1065px] gap-6 lg:flex 2xl:max-w-[1220px] 2xl:gap-8' id='js-oversized'>
          <div className='flex-1'>
            {/*  post image*/}
            <div className='border1 dark:bg-dark2 rounded-xl bg-white text-sm font-medium shadow-sm'>
              {/* video player */}
              <div className='videoFrame' uk-sticky='cls-active: sticked uk-animation-scale-up; media: 992; top:600'>
                <iframe
                  src='https://www.youtube.com/embed/0fYi8SGA20k'
                  className='aspect-video w-full rounded-t-md'
                  uk-video='autoplay: inview'
                />
                {/* close button after stiky */}
                <button type='button' id='closebtn' className='hidden' uk-toggle='target:.videoFrame ; cls: hide'>
                  {' '}
                  <IonIcon name='close' />{' '}
                </button>
              </div>
              {/* post heading */}
              <div className='flex gap-3 p-2.5 text-sm font-medium sm:p-4'>
                <a href='timeline.html'>
                  {' '}
                  <img src='assets/images/avatars/avatar-3.jpg' alt='' className='h-9 w-9 rounded-full' />{' '}
                </a>
                <div className='flex-1'>
                  <a href='timeline.html'>
                    {' '}
                    <h4 className='text-black dark:text-white'> Monroe Parker </h4>{' '}
                  </a>
                  <div className='text-xs text-gray-500 dark:text-white/80'> 2 hours ago</div>
                </div>
                <div className='-mr-1'>
                  <button type='button' className='button-icon h-8 w-8'>
                    {' '}
                    <IonIcon className='text-xl' name='ellipsis-horizontal' />{' '}
                  </button>
                  <div
                    className='w-[245px]'
                    uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click'
                  >
                    <nav>
                      <a href='#'>
                        {' '}
                        <IonIcon className='shrink-0 text-xl' name='bookmark-outline' /> Add to favorites{' '}
                      </a>
                      <a href='#'>
                        {' '}
                        <IonIcon className='shrink-0 text-xl' name='notifications-off-outline' /> Mute Notification{' '}
                      </a>
                      <a href='#'>
                        {' '}
                        <IonIcon className='shrink-0 text-xl' name='flag-outline' /> Report this post{' '}
                      </a>
                      <a href='#'>
                        {' '}
                        <IonIcon className='shrink-0 text-xl' name='share-outline' /> Share your profile{' '}
                      </a>
                      <hr />
                      <a href='#' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                        {' '}
                        <IonIcon className='shrink-0 text-xl' name='stop-circle-outline' /> Unfollow{' '}
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <p className='px-6 text-sm font-normal leading-6'>
                {' '}
                Photography is the art of capturing light with a camera. It can be used to create images that tell
                stories, express emotions, or document reality. it can be fun, challenging, or rewarding. It can also be
                a hobby, a profession, or a passion. 📷{' '}
              </p>
              {/* post icons */}
              <div className='flex items-center gap-4 p-2.5 text-xs font-semibold sm:p-4'>
                <div>
                  <div className='flex items-center gap-2.5'>
                    <button type='button' className='button-icon bg-red-100 text-red-500 dark:bg-slate-700'>
                      {' '}
                      <IonIcon className='text-lg' name='heart' />{' '}
                    </button>
                    <a href='#'>1,300</a>
                  </div>
                  <div
                    className='w-[212px] rounded-full bg-white p-1 px-2 text-2xl drop-shadow-md dark:bg-slate-700'
                    uk-drop='offset:10;pos: top-left; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-bottom-left'
                  >
                    <div
                      className='flex gap-2'
                      uk-scrollspy='target: > button; cls: uk-animation-scale-up; delay: 100 ;repeat: true'
                    >
                      <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                        {' '}
                        <span> 👍 </span>
                      </button>
                      <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                        {' '}
                        <span> ❤️ </span>
                      </button>
                      <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                        {' '}
                        <span> 😂 </span>
                      </button>
                      <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                        {' '}
                        <span> 😯 </span>
                      </button>
                      <button type='button' className='text-red-600 duration-300 hover:scale-125'>
                        {' '}
                        <span> 😢 </span>
                      </button>
                    </div>
                    <div className='absolute -bottom-1 left-3 hidden h-2.5 w-2.5 rotate-45 bg-white' />
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <button type='button' className='button-icon bg-slate-200/70 dark:bg-slate-700'>
                    {' '}
                    <IonIcon className='text-lg' name='chatbubble-ellipses' />{' '}
                  </button>
                  <span>260</span>
                </div>
                <button type='button' className='button-icon ml-auto'>
                  {' '}
                  <IonIcon className='text-xl' name='paper-plane-outline' />{' '}
                </button>
                <button type='button' className='button-icon'>
                  {' '}
                  <IonIcon className='text-xl' name='share-outline' />{' '}
                </button>
              </div>
              {/* comments */}
              <div className='relative space-y-3 border-t border-gray-100 p-2.5 font-normal sm:p-6 dark:border-slate-700/40'>
                <div className='relative flex items-start gap-3'>
                  <a href='timeline.html'>
                    {' '}
                    <img src='assets/images/avatars/avatar-3.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />{' '}
                  </a>
                  <div className='flex-1'>
                    <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                      {' '}
                      Monroe Parker{' '}
                    </a>
                    <p className='mt-0.5'>What a beautiful photo! I love it. 😍 </p>
                  </div>
                </div>
                <div className='relative flex items-start gap-3'>
                  <a href='timeline.html'>
                    {' '}
                    <img src='assets/images/avatars/avatar-2.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />{' '}
                  </a>
                  <div className='flex-1'>
                    <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                      {' '}
                      John Michael{' '}
                    </a>
                    <p className='mt-0.5'> You captured the moment.😎 </p>
                  </div>
                </div>
                <div className='relative flex items-start gap-3'>
                  <a href='timeline.html'>
                    {' '}
                    <img src='assets/images/avatars/avatar-5.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />{' '}
                  </a>
                  <div className='flex-1'>
                    <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                      {' '}
                      James Lewis{' '}
                    </a>
                    <p className='mt-0.5'>What a beautiful photo! I love it. 😍 </p>
                  </div>
                </div>
                <div className='relative flex items-start gap-3'>
                  <a href='timeline.html'>
                    {' '}
                    <img src='assets/images/avatars/avatar-4.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />{' '}
                  </a>
                  <div className='flex-1'>
                    <a href='timeline.html' className='inline-block font-medium text-black dark:text-white'>
                      {' '}
                      Martin Gray{' '}
                    </a>
                    <p className='mt-0.5'> You captured the moment.😎 </p>
                  </div>
                </div>
                <button type='button' className='mt-2 flex items-center   gap-1.5 text-blue-500'>
                  <IonIcon
                    name='chevron-down-outline'
                    className='ml-auto duration-200 group-aria-expanded:rotate-180'
                  />
                  More Comment
                </button>
              </div>
              {/* add comment */}
              <div className='flex items-center gap-1 border-t border-gray-100 p-2.5 sm:px-4 sm:py-3 dark:border-slate-700/40'>
                <img src='assets/images/avatars/avatar-7.jpg' alt='' className='h-6 w-6 rounded-full' />
                <div className='relative h-10 flex-1 overflow-hidden'>
                  <textarea
                    placeholder='Add Comment....'
                    rows={1}
                    className='w-full resize-none !bg-transparent px-4 py-2 focus:!border-transparent focus:!ring-transparent'
                    defaultValue={''}
                  />
                  <div className='!top-2 pr-2' uk-drop='pos: bottom-right; mode: click'>
                    <div
                      className='flex items-center gap-2'
                      uk-scrollspy='target: > svg; cls: uk-animation-slide-right-small; delay: 100 ;repeat: true'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='h-6 w-6 fill-sky-600'
                      >
                        <path
                          fillRule='evenodd'
                          d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='h-5 w-5 fill-pink-600'
                      >
                        <path d='M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z' />
                      </svg>
                    </div>
                  </div>
                </div>
                <button type='submit' className='rounded-full bg-secondery px-3.5 py-1.5 text-sm'>
                  {' '}
                  Replay
                </button>
              </div>
            </div>
            <br />
            <br />
          </div>
          {/* sidebar */}
          <div className='w-full lg:w-[350px] 2xl:w-[400px]'>
            <div
              className='space-y-4 max-lg:grid max-lg:gap-6 sm:grid-cols-2 lg:space-y-6 lg:pb-8'
              uk-sticky='media: 1024; end: #js-oversized; offset: 80'
            >
              {/* peaple you might know */}
              <div className='box p-5 pr-2'>
                <div className='flex items-baseline justify-between text-black dark:text-white'>
                  <h3 className='text-base font-bold'> Related Videos </h3>
                </div>
                {/* Video list */}
                <div className='mt-3 space-y-4'>
                  {/* single video */}
                  <div className='relative flex flex-col gap-2.5 lg:flex-row'>
                    {/* video thumbal */}
                    <div className='relative aspect-[3/1.5] shrink-0 overflow-hidden rounded-lg lg:h-[80px] lg:w-[130px]'>
                      <img className='h-full w-full object-cover' src='assets/images/video/img-2.png' alt='' />
                      {/* iconplay */}
                      <img
                        src='assets/images/icon-play.svg'
                        className='absolute !left-1/2 !top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2'
                        alt=''
                      />
                      {/* timer */}
                      <div className='absolute bottom-1 right-1 rounded bg-black/70 px-0.5 py-0.5 text-xs font-normal text-white'>
                        {' '}
                        10:32
                      </div>
                    </div>
                    {/* video contents */}
                    <div className='flex-1'>
                      <a href='#'>
                        {' '}
                        <h3 className='mb-1.5 line-clamp-2 text-sm font-semibold'>
                          {' '}
                          Great drone jet testing range flat model show with advance{' '}
                        </h3>
                      </a>
                      <div className='text-xs'>
                        <a href='#' className='mb-0.5 flex items-center gap-1'>
                          {' '}
                          John Michael{' '}
                          <IonIcon
                            name='checkmark-circle'
                            className='md hydrated dark:text-white'
                            role='img'
                            aria-label='checkmark circle'
                          />
                        </a>
                        <div className='flex items-center gap-2'>
                          {' '}
                          <div> 260K views </div> <div> 1 days ago</div>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single video */}
                  <div className='relative flex flex-col gap-2.5 lg:flex-row'>
                    {/* video thumbal */}
                    <div className='relative aspect-[3/1.5] shrink-0 overflow-hidden rounded-lg lg:h-[80px] lg:w-[130px]'>
                      <img className='h-full w-full object-cover' src='assets/images/video/img-3.png' alt='' />
                      {/* iconplay */}
                      <img
                        src='assets/images/icon-play.svg'
                        className='absolute !left-1/2 !top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2'
                        alt=''
                      />
                      {/* timer */}
                      <div className='absolute bottom-1 right-1 rounded bg-black/70 px-0.5 py-0.5 text-xs font-normal text-white'>
                        {' '}
                        10:32
                      </div>
                    </div>
                    {/* video contents */}
                    <div className='flex-1'>
                      <a href='#'>
                        {' '}
                        <h3 className='mb-1.5 line-clamp-2 text-sm font-semibold'>
                          {' '}
                          Exploring latest an abandoned water park in china city{' '}
                        </h3>
                      </a>
                      <div className='text-xs'>
                        <a href='#' className='mb-0.5 flex items-center gap-1'>
                          {' '}
                          John Michael{' '}
                          <IonIcon
                            name='checkmark-circle'
                            className='md hydrated dark:text-white'
                            role='img'
                            aria-label='checkmark circle'
                          />
                        </a>
                        <div className='flex items-center gap-2'>
                          {' '}
                          <div> 260K views </div> <div> 1 days ago</div>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single video */}
                  <div className='relative flex flex-col gap-2.5 lg:flex-row'>
                    {/* video thumbal */}
                    <div className='relative aspect-[3/1.5] shrink-0 overflow-hidden rounded-lg lg:h-[80px] lg:w-[130px]'>
                      <img className='h-full w-full object-cover' src='assets/images/video/img-4.png' alt='' />
                      {/* iconplay */}
                      <img
                        src='assets/images/icon-play.svg'
                        className='absolute !left-1/2 !top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2'
                        alt=''
                      />
                      {/* timer */}
                      <div className='absolute bottom-1 right-1 rounded bg-black/70 px-0.5 py-0.5 text-xs font-normal text-white'>
                        {' '}
                        10:32
                      </div>
                    </div>
                    {/* video contents */}
                    <div className='flex-1'>
                      <a href='#'>
                        {' '}
                        <h3 className='mb-1.5 line-clamp-2 text-sm font-semibold'>
                          {' '}
                          cheese cake eggless without oven hida mari cooking{' '}
                        </h3>
                      </a>
                      <div className='text-xs'>
                        <a href='#' className='mb-0.5 flex items-center gap-1'>
                          {' '}
                          John Michael{' '}
                          <IonIcon
                            name='checkmark-circle'
                            className='md hydrated dark:text-white'
                            role='img'
                            aria-label='checkmark circle'
                          />
                        </a>
                        <div className='flex items-center gap-2'>
                          {' '}
                          <div> 260K views </div> <div> 1 days ago</div>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single video */}
                  <div className='relative flex flex-col gap-2.5 lg:flex-row'>
                    {/* video thumbal */}
                    <div className='relative aspect-[3/1.5] shrink-0 overflow-hidden rounded-lg lg:h-[80px] lg:w-[130px]'>
                      <img className='h-full w-full object-cover' src='assets/images/video/img-5.png' alt='' />
                      {/* iconplay */}
                      <img
                        src='assets/images/icon-play.svg'
                        className='absolute !left-1/2 !top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2'
                        alt=''
                      />
                      {/* timer */}
                      <div className='absolute bottom-1 right-1 rounded bg-black/70 px-0.5 py-0.5 text-xs font-normal text-white'>
                        {' '}
                        10:32
                      </div>
                    </div>
                    {/* video contents */}
                    <div className='flex-1'>
                      <a href='#'>
                        {' '}
                        <h3 className='mb-1.5 line-clamp-2 text-sm font-semibold'>
                          {' '}
                          Amazing little girl has very talent voice vocal coach{' '}
                        </h3>
                      </a>
                      <div className='text-xs'>
                        <a href='#' className='mb-0.5 flex items-center gap-1'>
                          {' '}
                          John Michael{' '}
                          <IonIcon
                            name='checkmark-circle'
                            className='md hydrated dark:text-white'
                            role='img'
                            aria-label='checkmark circle'
                          />
                        </a>
                        <div className='flex items-center gap-2'>
                          {' '}
                          <div> 260K views </div> <div> 1 days ago</div>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single video */}
                  <div className='relative flex flex-col gap-2.5 lg:flex-row'>
                    {/* video thumbal */}
                    <div className='relative aspect-[3/1.5] shrink-0 overflow-hidden rounded-lg lg:h-[80px] lg:w-[130px]'>
                      <img className='h-full w-full object-cover' src='assets/images/video/img-1.png' alt='' />
                      {/* iconplay */}
                      <img
                        src='assets/images/icon-play.svg'
                        className='absolute !left-1/2 !top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2'
                        alt=''
                      />
                      {/* timer */}
                      <div className='absolute bottom-1 right-1 rounded bg-black/70 px-0.5 py-0.5 text-xs font-normal text-white'>
                        {' '}
                        10:32
                      </div>
                    </div>
                    {/* video contents */}
                    <div className='flex-1'>
                      <a href='#'>
                        {' '}
                        <h3 className='mb-1.5 line-clamp-2 text-sm font-semibold'>
                          {' '}
                          Amazing house construction from foundation to last detail{' '}
                        </h3>
                      </a>
                      <div className='text-xs'>
                        <a href='#' className='mb-0.5 flex items-center gap-1'>
                          {' '}
                          John Michael{' '}
                          <IonIcon
                            name='checkmark-circle'
                            className='md hydrated dark:text-white'
                            role='img'
                            aria-label='checkmark circle'
                          />
                        </a>
                        <div className='flex items-center gap-2'>
                          {' '}
                          <div> 260K views </div> <div> 1 days ago</div>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single video */}
                  <div className='relative flex flex-col gap-2.5 lg:flex-row'>
                    {/* video thumbal */}
                    <div className='relative aspect-[3/1.5] shrink-0 overflow-hidden rounded-lg lg:h-[80px] lg:w-[130px]'>
                      <img className='h-full w-full object-cover' src='assets/images/video/img-2.png' alt='' />
                      {/* iconplay */}
                      <img
                        src='assets/images/icon-play.svg'
                        className='absolute !left-1/2 !top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2'
                        alt=''
                      />
                      {/* timer */}
                      <div className='absolute bottom-1 right-1 rounded bg-black/70 px-0.5 py-0.5 text-xs font-normal text-white'>
                        {' '}
                        10:32
                      </div>
                    </div>
                    {/* video contents */}
                    <div className='flex-1'>
                      <a href='#'>
                        {' '}
                        <h3 className='mb-1.5 line-clamp-2 text-sm font-semibold'>
                          {' '}
                          Great drone jet testing range flat model show with advance{' '}
                        </h3>
                      </a>
                      <div className='text-xs'>
                        <a href='#' className='mb-0.5 flex items-center gap-1'>
                          {' '}
                          John Michael{' '}
                          <IonIcon
                            name='checkmark-circle'
                            className='md hydrated dark:text-white'
                            role='img'
                            aria-label='checkmark circle'
                          />
                        </a>
                        <div className='flex items-center gap-2'>
                          {' '}
                          <div> 260K views </div> <div> 1 days ago</div>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single video */}
                  <div className='relative flex flex-col gap-2.5 lg:flex-row'>
                    {/* video thumbal */}
                    <div className='relative aspect-[3/1.5] shrink-0 overflow-hidden rounded-lg lg:h-[80px] lg:w-[130px]'>
                      <img className='h-full w-full object-cover' src='assets/images/video/img-3.png' alt='' />
                      {/* iconplay */}
                      <img
                        src='assets/images/icon-play.svg'
                        className='absolute !left-1/2 !top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2'
                        alt=''
                      />
                      {/* timer */}
                      <div className='absolute bottom-1 right-1 rounded bg-black/70 px-0.5 py-0.5 text-xs font-normal text-white'>
                        {' '}
                        10:32
                      </div>
                    </div>
                    {/* video contents */}
                    <div className='flex-1'>
                      <a href='#'>
                        {' '}
                        <h3 className='mb-1.5 line-clamp-2 text-sm font-semibold'>
                          {' '}
                          Exploring latest an abandoned water park in china city{' '}
                        </h3>
                      </a>
                      <div className='text-xs'>
                        <a href='#' className='mb-0.5 flex items-center gap-1'>
                          {' '}
                          John Michael{' '}
                          <IonIcon
                            name='checkmark-circle'
                            className='md hydrated dark:text-white'
                            role='img'
                            aria-label='checkmark circle'
                          />
                        </a>
                        <div className='flex items-center gap-2'>
                          {' '}
                          <div> 260K views </div> <div> 1 days ago</div>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* open chat box */}
        <div>
          <button
            type='button'
            className='group fixed bottom-0 right-0 m-5 flex items-center gap-2 rounded-2xl bg-gradient-to-tr from-blue-500 to-blue-700 px-4 py-2.5 text-white shadow sm:m-10'
          >
            <svg
              className='h-6 w-6 duration-500 group-aria-expanded:hidden'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
              />
            </svg>
            <div className='text-base font-semibold max-sm:hidden'> Chat </div>
            <svg
              className='-mr-1 hidden h-6 w-6 group-aria-expanded:block'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <div
            className='dark:bg-dark3 w-screen rounded-xl  border-t bg-white drop-shadow-xl sm:w-80 dark:border-slate-600'
            id='chat__box'
            uk-drop='offset:10;pos: bottom-right; animate-out: true; animation: uk-animation-scale-up uk-transform-origin-bottom-right; mode: click'
          >
            <div className='relative'>
              <div className='p-5'>
                <h1 className='text-lg font-bold text-black'> Chats </h1>
              </div>
              {/* search input defaul is hidden */}
              <div
                className='absolute top-11 z-10 flex hidden w-full gap-2 border-b bg-white p-3 dark:border-slate-600 dark:bg-slate-700'
                uk-scrollspy='cls:uk-animation-slide-bottom-small ; repeat: true; duration:0'
                id='search__chat'
              >
                <div className='relative w-full'>
                  <input type='text' className='w-full rounded-3xl dark:!bg-white/10' placeholder='Search' />
                  <button
                    type='button'
                    className='absolute  right-0  top-1/2 shrink-0 -translate-y-1/2 rounded-full px-2'
                    uk-toggle='target: #search__chat ; cls: hidden'
                  >
                    <IonIcon name='close-outline' className='flex text-xl' />
                  </button>
                </div>
              </div>
              {/* button actions */}
              <div className='absolute -right-1 top-0 m-5 flex gap-2 text-xl'>
                <button uk-toggle='target: #search__chat ; cls: hidden'>
                  <IonIcon name='search-outline' />
                </button>
                <button uk-toggle='target: #chat__box ; cls: uk-open'>
                  <IonIcon name='close-outline' />
                </button>
              </div>
              {/* tabs */}
              <div className='page-heading bg-slat e-50 '>
                <nav className='nav__underline -mt-7 px-5'>
                  <ul
                    className='group'
                    uk-switcher='connect: #chat__tabs ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium'
                  >
                    <li>
                      {' '}
                      <a
                        href='#'
                        className='inline-block border-b-2 border-transparent py-[18px] aria-expanded:border-black aria-expanded:text-black aria-expanded:dark:border-white aria-expanded:dark:text-white'
                      >
                        {' '}
                        Friends
                      </a>{' '}
                    </li>
                    <li>
                      {' '}
                      <a href='#'> Groups </a>{' '}
                    </li>
                  </ul>
                </nav>
              </div>
              {/* tab 2 optional */}
              <div
                className='relative z-10 -mt-12 grid hidden  grid-cols-2 border-b bg-slate-50 px-3 py-2  text-sm'
                uk-switcher='connect: #chat__tabs; toggle: * > button ; animation: uk-animation-slide-right uk-animation-slide-top'
              >
                <button className='rounded-md bg-white py-1.5 shadow'> Friends </button>
                <button> Groups </button>
              </div>
              {/* chat list */}
              <div className='uk-switcher -mt-8 overflow-hidden rounded-xl' id='chat__tabs'>
                {/* tab list 1 */}
                <div className='space-y -m t-5 h-[280px] overflow-y-auto p-3 text-sm font-medium'>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-1.jpg' alt='' className='w-7 rounded-full' />
                      <div> Jesse Steeve </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-2.jpg' alt='' className='w-7 rounded-full' />
                      <div> John Michael </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-3.jpg' alt='' className='w-7 rounded-full' />
                      <div> Monroe Parker </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-5.jpg' alt='' className='w-7 rounded-full' />
                      <div> James Lewis </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-4.jpg' alt='' className='w-7 rounded-full' />
                      <div> Martin Gray </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-6.jpg' alt='' className='w-7 rounded-full' />
                      <div> Alexa stella </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-1.jpg' alt='' className='w-7 rounded-full' />
                      <div> Jesse Steeve </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-2.jpg' alt='' className='w-7 rounded-full' />
                      <div> John Michael </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-3.jpg' alt='' className='w-7 rounded-full' />
                      <div> Monroe Parker </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-5.jpg' alt='' className='w-7 rounded-full' />
                      <div> James Lewis </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-4.jpg' alt='' className='w-7 rounded-full' />
                      <div> Martin Gray </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-6.jpg' alt='' className='w-7 rounded-full' />
                      <div> Alexa stella </div>
                    </div>
                  </a>
                </div>
                {/* tab list 2 */}
                <div className='space-y -m t-5 h-[280px] overflow-y-auto p-3 text-sm font-medium'>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-1.jpg' alt='' className='w-7 rounded-full' />
                      <div> Jesse Steeve </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-2.jpg' alt='' className='w-7 rounded-full' />
                      <div> John Michael </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-3.jpg' alt='' className='w-7 rounded-full' />
                      <div> Monroe Parker </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-5.jpg' alt='' className='w-7 rounded-full' />
                      <div> James Lewis </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-4.jpg' alt='' className='w-7 rounded-full' />
                      <div> Martin Gray </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-6.jpg' alt='' className='w-7 rounded-full' />
                      <div> Alexa stella </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-1.jpg' alt='' className='w-7 rounded-full' />
                      <div> Jesse Steeve </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-2.jpg' alt='' className='w-7 rounded-full' />
                      <div> John Michael </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-3.jpg' alt='' className='w-7 rounded-full' />
                      <div> Monroe Parker </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-5.jpg' alt='' className='w-7 rounded-full' />
                      <div> James Lewis </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-4.jpg' alt='' className='w-7 rounded-full' />
                      <div> Martin Gray </div>
                    </div>
                  </a>
                  <a href='#' className='block'>
                    <div className='flex items-center gap-3.5 rounded-lg p-2 hover:bg-secondery dark:hover:bg-white/10'>
                      <img src='assets/images/avatars/avatar-6.jpg' alt='' className='w-7 rounded-full' />
                      <div> Alexa stella </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='dark:bg-dark3 absolute -bottom-2 right-5 h-3.5 w-3.5 rotate-45 bg-white' />
          </div>
        </div>
        {/* post preview modal */}
        <div className='uk-open hidden max-lg:!items-start lg:overflow-hidden lg:p-10' id='preview_modal' uk-modal=''>
          <div className='uk-modal-dialog tt relative mx-auto w-full items-center overflow-hidden rounded-lg shadow-xl  lg:flex lg:h-[85vh]'>
            {/* video player */}
            <div className='relative flex h-96 w-full items-center justify-center bg-black/90 backdrop-blur lg:h-full lg:w-[calc(100vw-400px)]'>
              <div className='w-full' uk-sticky='cls-active: sticked uk-animation-scale-up; media: 992; top:600'>
                <iframe
                  src='https://www.youtube.com/embed/0fYi8SGA20k'
                  className='aspect-video w-full'
                  uk-video='autoplay: inview'
                />
              </div>
              {/* close button */}
              <button
                type='button'
                className='uk-animation-slide-right-medium uk-modal-close absolute right-0 top-0 z-10 m-3 rounded-full bg-white p-2 dark:bg-slate-600'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            {/* right sidebar */}
            <div className='dark:bg-dark2 relative flex h-full w-full  flex-col justify-between overflow-y-auto bg-white shadow-xl lg:w-[400px]'>
              <div className='p-5 pb-0'>
                {/* story heading */}
                <div className='flex gap-3 text-sm font-medium'>
                  <img src='assets/images/avatars/avatar-5.jpg' alt='' className='h-9 w-9 rounded-full' />
                  <div className='flex-1'>
                    <h4 className='font-medium text-black dark:text-white'> Steeve </h4>
                    <div className='text-xs text-gray-500 dark:text-white/80'> 2 hours ago</div>
                  </div>
                  {/* dropdown */}
                  <div className='-m-1'>
                    <button type='button' className='button-icon h-8 w-8'>
                      {' '}
                      <IonIcon className='text-xl' name='ellipsis-horizontal' />{' '}
                    </button>
                    <div
                      className='w-[253px]'
                      uk-dropdown='pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true'
                    >
                      <nav>
                        <a href='#'>
                          {' '}
                          <IonIcon className='shrink-0 text-xl' name='bookmark-outline' /> Add to favorites{' '}
                        </a>
                        <a href='#'>
                          {' '}
                          <IonIcon className='shrink-0 text-xl' name='notifications-off-outline' /> Mute Notification{' '}
                        </a>
                        <a href='#'>
                          {' '}
                          <IonIcon className='shrink-0 text-xl' name='flag-outline' /> Report this post{' '}
                        </a>
                        <a href='#'>
                          {' '}
                          <IonIcon className='shrink-0 text-xl' name='share-outline' /> Share your profile{' '}
                        </a>
                        <hr />
                        <a href='#' className='text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50'>
                          {' '}
                          <IonIcon className='shrink-0 text-xl' name='stop-circle-outline' /> Unfollow{' '}
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <p className='mt-4 text-sm font-normal leading-6'>
                  {' '}
                  Photography is the art of capturing light with a camera. it can be fun, challenging. It can also be a
                  hobby, a passion. 📷{' '}
                </p>
                <div className='relative -mx-5 mt-3 px-5 py-3 shadow'>
                  <div className='flex items-center gap-4 text-xs font-semibold'>
                    <div className='flex items-center gap-2.5'>
                      <button type='button' className='button-icon bg-red-100 text-red-500 dark:bg-slate-700'>
                        {' '}
                        <IonIcon className='text-lg' name='heart' />{' '}
                      </button>
                      <a href='#'>1,300</a>
                    </div>
                    <div className='flex items-center gap-3'>
                      <button type='button' className='button-icon bg-slate-100 dark:bg-slate-700'>
                        {' '}
                        <IonIcon className='text-lg' name='chatbubble-ellipses' />{' '}
                      </button>
                      <span>260</span>
                    </div>
                    <button type='button' className='button-icon ml-auto'>
                      {' '}
                      <IonIcon className='text-xl' name='share-outline' />{' '}
                    </button>
                    <button type='button' className='button-icon'>
                      {' '}
                      <IonIcon className='text-xl' name='bookmark-outline' />{' '}
                    </button>
                  </div>
                </div>
              </div>
              <div className='h-full flex-1 overflow-y-auto p-5'>
                {/* comment list */}
                <div className='relative space-y-5 text-sm font-medium'>
                  <div className='relative flex items-start gap-3'>
                    <img src='assets/images/avatars/avatar-2.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                    <div className='flex-1'>
                      <a href='#' className='inline-block font-medium text-black dark:text-white'>
                        {' '}
                        Steeve{' '}
                      </a>
                      <p className='mt-0.5'>What a beautiful, I love it. 😍 </p>
                    </div>
                  </div>
                  <div className='relative flex items-start gap-3'>
                    <img src='assets/images/avatars/avatar-3.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                    <div className='flex-1'>
                      <a href='#' className='inline-block font-medium text-black dark:text-white'>
                        {' '}
                        Monroe{' '}
                      </a>
                      <p className='mt-0.5'> You captured the moment.😎 </p>
                    </div>
                  </div>
                  <div className='relative flex items-start gap-3'>
                    <img src='assets/images/avatars/avatar-7.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                    <div className='flex-1'>
                      <a href='#' className='inline-block font-medium text-black dark:text-white'>
                        {' '}
                        Alexa{' '}
                      </a>
                      <p className='mt-0.5'> This photo is amazing! </p>
                    </div>
                  </div>
                  <div className='relative flex items-start gap-3'>
                    <img src='assets/images/avatars/avatar-4.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                    <div className='flex-1'>
                      <a href='#' className='inline-block font-medium text-black dark:text-white'>
                        {' '}
                        John
                      </a>
                      <p className='mt-0.5'> Wow, You are so talented 😍 </p>
                    </div>
                  </div>
                  <div className='relative flex items-start gap-3'>
                    <img src='assets/images/avatars/avatar-5.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                    <div className='flex-1'>
                      <a href='#' className='inline-block font-medium text-black dark:text-white'>
                        {' '}
                        Michael{' '}
                      </a>
                      <p className='mt-0.5'> I love taking photos 🌳🐶</p>
                    </div>
                  </div>
                  <div className='relative flex items-start gap-3'>
                    <img src='assets/images/avatars/avatar-3.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                    <div className='flex-1'>
                      <a href='#' className='inline-block font-medium text-black dark:text-white'>
                        {' '}
                        Monroe{' '}
                      </a>
                      <p className='mt-0.5'> Awesome. 😊😢 </p>
                    </div>
                  </div>
                  <div className='relative flex items-start gap-3'>
                    <img src='assets/images/avatars/avatar-5.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                    <div className='flex-1'>
                      <a href='#' className='inline-block font-medium text-black dark:text-white'>
                        {' '}
                        Jesse{' '}
                      </a>
                      <p className='mt-0.5'> Well done 🎨📸 </p>
                    </div>
                  </div>
                  <div className='relative flex items-start gap-3'>
                    <img src='assets/images/avatars/avatar-2.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                    <div className='flex-1'>
                      <a href='#' className='inline-block font-medium text-black dark:text-white'>
                        {' '}
                        Steeve{' '}
                      </a>
                      <p className='mt-0.5'>What a beautiful, I love it. 😍 </p>
                    </div>
                  </div>
                  <div className='relative flex items-start gap-3'>
                    <img src='assets/images/avatars/avatar-7.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                    <div className='flex-1'>
                      <a href='#' className='inline-block font-medium text-black dark:text-white'>
                        {' '}
                        Alexa{' '}
                      </a>
                      <p className='mt-0.5'> This photo is amazing! </p>
                    </div>
                  </div>
                  <div className='relative flex items-start gap-3'>
                    <img src='assets/images/avatars/avatar-4.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                    <div className='flex-1'>
                      <a href='#' className='inline-block font-medium text-black dark:text-white'>
                        {' '}
                        John
                      </a>
                      <p className='mt-0.5'> Wow, You are so talented 😍 </p>
                    </div>
                  </div>
                  <div className='relative flex items-start gap-3'>
                    <img src='assets/images/avatars/avatar-5.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                    <div className='flex-1'>
                      <a href='#' className='inline-block font-medium text-black dark:text-white'>
                        {' '}
                        Michael{' '}
                      </a>
                      <p className='mt-0.5'> I love taking photos 🌳🐶</p>
                    </div>
                  </div>
                  <div className='relative flex items-start gap-3'>
                    <img src='assets/images/avatars/avatar-3.jpg' alt='' className='mt-1 h-6 w-6 rounded-full' />
                    <div className='flex-1'>
                      <a href='#' className='inline-block font-medium text-black dark:text-white'>
                        {' '}
                        Monroe{' '}
                      </a>
                      <p className='mt-0.5'> Awesome. 😊😢 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='dark:bg-dark2 flex items-center gap-2 bg-white p-3 text-sm font-medium'>
                <img src='assets/images/avatars/avatar-2.jpg' alt='' className='h-6 w-6 rounded-full' />
                <div className='relative flex-1 overflow-hidden '>
                  <textarea
                    placeholder='Add Comment....'
                    rows={1}
                    className='resize- w-full  resize-y px-4 py-2 focus:!border-transparent focus:!ring-transparent'
                    defaultValue={''}
                  />
                  <div className='absolute bottom-0.5 right-0 m-3 flex items-center gap-2'>
                    <IonIcon className='flex text-xl text-blue-700' name='image' />
                    <IonIcon className='flex text-xl text-yellow-500' name='happy' />
                  </div>
                </div>
                <button type='submit' className='hidden rounded-full bg-secondery px-4 py-1.5 text-sm font-semibold'>
                  {' '}
                  Replay
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default Video_Watch
