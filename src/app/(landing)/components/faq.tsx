import React from 'react'

import { cn } from '@/lib/utils'
function FrequentlyAskQuestions() {
  return (
    <section
      id="faq"
      className={cn(
        'container space-y-6 rounded-md bg-secondary py-8',
        'md:py-12',
        'lg:py-24',
      )}
    >
      <div className="mx-auto flex max-w-screen-md flex-col justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className={cn(
              'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm',
              'dark:from-gray-100 dark:to-gray-800',
              'md:text-6xl md:leading-tight',
            )}
          >
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-20">
          <ul>
            <li className="mb-10 text-left">
              <div className="mb-5 flex flex-row items-start">
                <div className="mr-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white sm:flex">
                  <svg
                    width="30px"
                    fill="white"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <rect
                          width={24}
                          height={24}
                          transform="rotate(180 12 12)"
                          opacity={0}
                        />
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                        <circle cx={12} cy={19} r={1} />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="flex w-full items-center bg-gray-100 p-5 px-10">
                  <h4 className="text-md font-medium leading-6 text-gray-900">
                    How does SlideTube-AI work?
                  </h4>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="flex w-full items-center bg-indigo-100 p-5 px-10">
                  <p className="text-sm text-gray-700">
                    SlideTube-AI uses advanced machine learning algorithms to
                    analyze YouTube videos, extracting key content, summarizing
                    information, and creating slides based on the video’s main
                    points.
                  </p>
                </div>
                <div className="ml-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white sm:flex">
                  <svg
                    height="25px"
                    fill="white"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 295.238 295.238"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
				h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
				l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
				c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905
				l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371
				c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z
				 M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862
				l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001
				L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176
				c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333
				c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352
				c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287
				c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71
				c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z
				 M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429
				v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59
				h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.267-3.943
				V25.714z"
                          />
                          <path
                            d="M96.51,123.81c-7.876,0-14.286-4.762-14.286-14.286H72.7c0,14.286,10.681,23.81,23.81,23.81
				c13.129,0,23.81-9.524,23.81-23.81h-9.524C110.795,119.048,104.386,123.81,96.51,123.81z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </li>
            <li className="mb-10 text-left">
              <div className="mb-5 flex flex-row items-start">
                <div className="mr-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white sm:flex">
                  <svg
                    width="30px"
                    fill="white"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <rect
                          width={24}
                          height={24}
                          transform="rotate(180 12 12)"
                          opacity={0}
                        />
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                        <circle cx={12} cy={19} r={1} />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="flex w-full items-center bg-gray-100 p-5 px-10">
                  <h4 className="text-md font-medium leading-6 text-gray-900">
                    What types of videos can I use?
                  </h4>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="flex w-full items-center bg-indigo-100 p-5 px-10">
                  <p className="text-sm text-gray-700">
                    You can use any publicly available YouTube video. Simply
                    paste the video URL into SlideTube-AI, and our AI will
                    handle the rest!
                  </p>
                </div>
                <div className="ml-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white sm:flex">
                  <svg
                    height="25px"
                    fill="white"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 295.238 295.238"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
				h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
				l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
				c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905
				l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371
				c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z
				 M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862
				l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001
				L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176
				c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333
				c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352
				c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287
				c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71
				c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z
				 M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429
				v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59
				h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.267-3.943
				V25.714z"
                          />
                          <path
                            d="M96.51,123.81c-7.876,0-14.286-4.762-14.286-14.286H72.7c0,14.286,10.681,23.81,23.81,23.81
				c13.129,0,23.81-9.524,23.81-23.81h-9.524C110.795,119.048,104.386,123.81,96.51,123.81z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </li>
            <li className="mb-10 text-left">
              <div className="mb-5 flex flex-row items-start">
                <div className="mr-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white sm:flex">
                  <svg
                    width="30px"
                    fill="white"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <rect
                          width={24}
                          height={24}
                          transform="rotate(180 12 12)"
                          opacity={0}
                        />
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                        <circle cx={12} cy={19} r={1} />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="flex w-full items-center bg-gray-100 p-5 px-10">
                  <h4 className="text-md font-medium leading-6 text-gray-900">
                    Is there a limit to how many presentations I can create?
                  </h4>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="flex w-full items-center bg-indigo-100 p-5 px-10">
                  <p className="text-sm text-gray-700">
                    Our free plan offers limited access to features. For
                    unlimited presentations and premium features, consider
                    upgrading to one of our paid plans.
                  </p>
                </div>
                <div className="ml-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white sm:flex">
                  <svg
                    height="25px"
                    fill="white"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 295.238 295.238"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
				h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
				l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
				c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905
				l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371
				c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z
				 M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862
				l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001
				L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176
				c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333
				c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352
				c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287
				c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71
				c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z
				 M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429
				v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59
				h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.267-3.943
				V25.714z"
                          />
                          <path
                            d="M96.51,123.81c-7.876,0-14.286-4.762-14.286-14.286H72.7c0,14.286,10.681,23.81,23.81,23.81
				c13.129,0,23.81-9.524,23.81-23.81h-9.524C110.795,119.048,104.386,123.81,96.51,123.81z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </li>
            <li className="mb-10 text-left">
              <div className="mb-5 flex flex-row items-start">
                <div className="mr-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white sm:flex">
                  <svg
                    width="30px"
                    fill="white"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <rect
                          width={24}
                          height={24}
                          transform="rotate(180 12 12)"
                          opacity={0}
                        />
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                        <circle cx={12} cy={19} r={1} />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="flex w-full items-center bg-gray-100 p-5 px-10">
                  <h4 className="text-md font-medium leading-6 text-gray-900">
                    Can I edit the presentations after they are generated?
                  </h4>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="flex w-full items-center bg-indigo-100 p-5 px-10">
                  <p className="text-sm text-gray-700">
                    Yes! Once your presentation is generated, you can edit,
                    customize, and fine-tune it in our easy-to-use editor.
                  </p>
                </div>
                <div className="ml-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white sm:flex">
                  <svg
                    height="25px"
                    fill="white"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 295.238 295.238"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
				h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
				l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
				c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905
				l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371
				c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z
				 M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862
				l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001
				L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176
				c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333
				c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352
				c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287
				c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71
				c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z
				 M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429
				v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59
				h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.267-3.943
				V25.714z"
                          />
                          <path
                            d="M96.51,123.81c-7.876,0-14.286-4.762-14.286-14.286H72.7c0,14.286,10.681,23.81,23.81,23.81
				c13.129,0,23.81-9.524,23.81-23.81h-9.524C110.795,119.048,104.386,123.81,96.51,123.81z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </li>
            <li className="mb-10 text-left">
              <div className="mb-5 flex flex-row items-start">
                <div className="mr-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white sm:flex">
                  <svg
                    width="30px"
                    fill="white"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <rect
                          width={24}
                          height={24}
                          transform="rotate(180 12 12)"
                          opacity={0}
                        />
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                        <circle cx={12} cy={19} r={1} />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="flex w-full items-center bg-gray-100 p-5 px-10">
                  <h4 className="text-md font-medium leading-6 text-gray-900">
                    Can I export my presentations to PowerPoint or Google
                    Slides?
                  </h4>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="flex w-full items-center bg-indigo-100 p-5 px-10">
                  <p className="text-sm text-gray-700">
                    Absolutely! You can export your presentation to PowerPoint,
                    Google Slides, or PDF formats for easy sharing and
                    presentation.
                  </p>
                </div>
                <div className="ml-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white sm:flex">
                  <svg
                    height="25px"
                    fill="white"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 295.238 295.238"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
				h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
				l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
				c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905
				l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371
				c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z
				 M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862
				l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001
				L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176
				c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333
				c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352
				c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287
				c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71
				c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z
				 M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429
				v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59
				h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.267-3.943
				V25.714z"
                          />
                          <path
                            d="M96.51,123.81c-7.876,0-14.286-4.762-14.286-14.286H72.7c0,14.286,10.681,23.81,23.81,23.81
				c13.129,0,23.81-9.524,23.81-23.81h-9.524C110.795,119.048,104.386,123.81,96.51,123.81z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </li>
            <li className="mb-10 text-left">
              <div className="mb-5 flex flex-row items-start">
                <div className="mr-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white sm:flex">
                  <svg
                    width="30px"
                    fill="white"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <rect
                          width={24}
                          height={24}
                          transform="rotate(180 12 12)"
                          opacity={0}
                        />
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                        <circle cx={12} cy={19} r={1} />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="flex w-full items-center bg-gray-100 p-5 px-10">
                  <h4 className="text-md font-medium leading-6 text-gray-900">
                    Is SlideTube-AI free to use?
                  </h4>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="flex w-full items-center bg-indigo-100 p-5 px-10">
                  <p className="text-sm text-gray-700">
                    We offer a free trial that lets you explore the core
                    features. To access premium features and unlimited
                    presentations, you’ll need to subscribe to a paid plan.
                  </p>
                </div>
                <div className="ml-3 hidden items-center justify-center rounded-full border-4 border-white bg-indigo-500 p-3 text-xl font-semibold text-white sm:flex">
                  <svg
                    height="25px"
                    fill="white"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 295.238 295.238"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
				h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
				l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
				c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905
				l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371
				c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z
				 M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862
				l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001
				L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176
				c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333
				c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352
				c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287
				c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71
				c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z
				 M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429
				v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59
				h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.267-3.943
				V25.714z"
                          />
                          <path
                            d="M96.51,123.81c-7.876,0-14.286-4.762-14.286-14.286H72.7c0,14.286,10.681,23.81,23.81,23.81
				c13.129,0,23.81-9.524,23.81-23.81h-9.524C110.795,119.048,104.386,123.81,96.51,123.81z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FrequentlyAskQuestions
