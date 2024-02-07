import React from 'react'
import Sync from "../assets/Sync.png"


const Footer = () => {
    return (
        <footer class="bg-gray-100 dark:bg-gray-900">
            <div class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <a
                        class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600 sm:p-3 lg:p-4"
                        href="#MainContent"
                    >
                        <span class="sr-only">Back to top</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                <div class="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div class="flex justify-center text-teal-600 dark:text-teal-300 lg:justify-start">
                         <img src={Sync} className='w-[20vw] h-[11vh]' alt="Image not visible " />
                        </div>

                        <p
                            class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 lg:text-left"
                        >
                          SyncTube is one stop solution for all Youtubers who want professional Editors for their high quality content.
                        </p>
                    </div>

                    <ul
                        class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                    >
                        <li>
                            <a
                                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="/"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="/"
                            >
                                Services
                            </a>
                        </li>

                        <li>
                            <a
                                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="/"
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="/"
                            >
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>

                <p class="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 lg:text-right">
                    Copyright &copy; 2024. All rights reserved.
                </p>
            </div>
        </footer>)
}

export default Footer
