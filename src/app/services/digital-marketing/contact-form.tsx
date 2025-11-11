// src/app/services/digital-marketing/contact-form.tsx
'use client'

import { useEffect } from 'react'
import { BsPhone, BsEnvelope, BsGeoAlt } from 'react-icons/bs'

export default function ContactForm() {
  useEffect(() => {
    // Load the form script after component mounts
    const script = document.createElement('script')
    script.src = 'https://app.visionarybizz.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <section className="bg-light py-5" id="contact-form">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-xl-8 col-lg-9 text-center">
              <span className="badge badge-primary rounded-pill mb-3">Get Started</span>
              <h2 className="mb-3">Ready to Grow Your Business in Kuwait?</h2>
              <p className="text-muted fs-6">
                Fill out the form below and our team will get back to you within 24 hours to discuss 
                your digital marketing needs in Kuwait.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="card border-0 rounded-4 shadow-sm">
                <div className="card-body p-0">
                  {/* Embedded Form */}
                  <div style={{ minHeight: '870px', width: '100%' }}>
                    <iframe
                      src="https://app.visionarybizz.com/widget/form/gkSZE7nfmfWCRS6AESvK"
                      className="w-100"
                      style={{
                        height: '870px',
                        border: 'none',
                        borderRadius: '4px'
                      }}
                      id="inline-gkSZE7nfmfWCRS6AESvK"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Website - Agency form"
                      data-height="870"
                      data-layout-iframe-id="inline-gkSZE7nfmfWCRS6AESvK"
                      data-form-id="gkSZE7nfmfWCRS6AESvK"
                      title="Website - Agency form"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Below Form */}
          {/* <div className="row justify-content-center mt-5">
            <div className="col-xl-10 col-lg-11">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="text-center">
                    <BsPhone size={32} className="text-primary mb-3" />
                    <h6 className="fw-medium mb-2">Call Us</h6>
                    <p className="text-muted mb-0">+965 XXXX XXXX</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <BsEnvelope size={32} className="text-primary mb-3" />
                    <h6 className="fw-medium mb-2">Email Us</h6>
                    <p className="text-muted mb-0">marketing@kuwaitbizz.com</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <BsGeoAlt size={32} className="text-primary mb-3" />
                    <h6 className="fw-medium mb-2">Visit Us</h6>
                    <p className="text-muted mb-0">Kuwait City, Kuwait</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}