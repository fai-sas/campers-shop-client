import React from 'react'
import { Collapse } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

const { Panel } = Collapse

const Faq = () => {
  return (
    <div className='container p-8 mx-auto'>
      <div className='flex flex-col items-start w-full max-w-xl px-4 py-8 mx-auto lg:px-8 lg:max-w-screen-xl'>
        <div className='grid gap-10 my-8 md:grid-cols-5'>
          <div className='md:col-span-2'>
            <div className='max-w-xs'>
              <h2 className='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>
                Frequently <br /> asked questions
              </h2>
              <p className='hidden mt-1 text-gray-600 md:block dark:text-gray-400'>
                Answers to the most frequently asked questions.
              </p>
            </div>
          </div>

          <div className='md:col-span-3'>
            <Collapse accordion>
              <Panel header='How can I track my order status?' key='1'>
                <p className='text-gray-600 dark:text-gray-400'>
                  We provide a tracking number for every order. You can use this
                  number to check your order&apos; status. Simply visit the
                  Track Order section on our website and input your tracking
                  number to get real-time updates on your shipment.
                </p>
              </Panel>
              <Panel header='What payment methods do you accept?' key='2'>
                <p className='text-gray-600 dark:text-gray-400'>
                  We accept a variety of payment methods, including major credit
                  and debit cards such as Visa, MasterCard, and American
                  Express. Additionally, we offer secure payment gateways for
                  digital wallets and online payment services.
                </p>
              </Panel>
              <Panel
                header='Is my personal information safe when I shop here?'
                key='3'
              >
                <p className='text-gray-600 dark:text-gray-400'>
                  Yes, your privacy and security are our top priorities. We use
                  industry-standard encryption and security measures to protect
                  your personal information. Your data is always handled with
                  the utmost care. You can read more about our security
                  practices in our Privacy Policy.
                </p>
              </Panel>
              <Panel
                header='Do you offer product warranties or guarantees?'
                key='4'
              >
                <p className='text-gray-600 dark:text-gray-400'>
                  Absolutely, we stand by the quality of our products. Many
                  items come with manufacturer warranties. You can find details
                  about warranties and guarantees on the product page. If you
                  encounter any issues, please contact our customer support for
                  assistance.
                </p>
              </Panel>
              <Panel header='What is your return policy?' key='5'>
                <p className='text-gray-600 dark:text-gray-400'>
                  We want you to be satisfied with your purchase. If you're not
                  completely happy, we offer a hassle-free return policy. You
                  can initiate a return within 30 days of receiving your order.
                  Please review our Return Policy for more details.
                </p>
              </Panel>
              <Panel
                header='Do you offer customer support? How can I get in touch?'
                key='6'
              >
                <p className='text-gray-600 dark:text-gray-400'>
                  Yes, we have a dedicated customer support team ready to assist
                  you. You can reach us through email, live chat, or by calling
                  our customer support hotline. We are here to answer your
                  questions, help with issues, and ensure your shopping
                  experience is enjoyable.
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
