import Head from 'next/head'
import { useState, useEffect } from 'react'
import { saveAs } from 'file-saver';
import CreatableSelect from 'react-select/creatable';

export default function AddApp() {

  function friendlyUrl(url) {
    // make the url lowercase         
    var encodedUrl = url.toString().toLowerCase();
    // replace & with and           
    encodedUrl = encodedUrl.split(/\&+/).join("-and-")
    // remove invalid characters 
    encodedUrl = encodedUrl.split(/[^a-z0-9]/).join("-");
    // remove duplicates 
    encodedUrl = encodedUrl.split(/-+/).join("-");
    // trim leading & trailing characters 
    encodedUrl = encodedUrl.trim('-');
    return encodedUrl;
  }

  const downloadZip = () => {
    var JSZip = require("jszip");
    const zip = new JSZip()
    const folder = zip.folder(application.friendly_name)
    folder.file('app.json', JSON.stringify(application, null, 2))
    if (icon) {
      folder.file(application.image_src, icon.file)
    }
    zip.generateAsync({ type: "blob" })
      .then(function (content) {
        // Force down of the Zip file
        saveAs(content, friendlyUrl(application.friendly_name) + '.zip');
      });
  }

  const [icon, setIcon] = useState(null)
  const [ext, setExt] = useState('png')

  const [application, setApplication] = useState({
    friendly_name: null,
    image_src: null,
    description: null,
    name: null,
    cores: 2,
    memory: 2768,
    gpu_count: 0,
    cpu_allocation_method: "Inherit",
    docker_registry: "https://index.docker.io/v1/",
    volume_mappings: "{}",
    run_config: "{}",
    exec_config: "{}",
    categories: [],
    require_gpu: false,
    enabled: true,
    restrict_to_network: false,
    restrict_network_names: "[]",
    allow_network_selection: false,
    notes: null,
    image_type: 'Container',
  })

  const displayApplication = () => {
    return {
      ...application,
      categories: JSON.stringify(application.categories)
    }
  }

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#f1f5f9",
      borderRadius: '0.5rem',
      borderColor: "#94a3b8"
    }),
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: '#dde6f1',
      };
    }
  }

  useEffect(() => {
    if (application && application.friendly_name) {
      const updateapp = {
        ...application
      }
      updateapp.image_src = friendlyUrl(updateapp.friendly_name) + '.' + ext
      setApplication(updateapp)
    }
  }, [ext])

  const updateCategories = (items) => {
    const updateapp = {
      ...application
    }
    updateapp.categories = items.map(cat => cat.value)
    setApplication(updateapp)
  }


  const handleChange = (event) => {
    const updateapp = {
      ...application
    }
    updateapp[event.target.name] = event.target.value
    if (event.target.name === 'icon') {
      delete updateapp.icon
      setIcon({
        value: event.target.value,
        file: event.target.files[0]
      })
      setExt(event.target.value.substr(event.target.value.lastIndexOf('.') + 1))
      // return
    }

    if (updateapp.friendly_name) {
      updateapp.image_src = friendlyUrl(updateapp.friendly_name) + '.' + ext
    }

    setApplication(updateapp)
  }

  const options = [
    { value: 'Browser', label: 'Browser' },
    { value: 'Communication', label: 'Communication' },
    { value: 'Desktop', label: 'Desktop' },
    { value: 'Development', label: 'Development' },
    { value: 'Games', label: 'Games' },
    { value: 'Multimedia', label: 'Multimedia' },
    { value: 'Office', label: 'Office' },
    { value: 'Privacy', label: 'Privacy' },
    { value: 'Productivity', label: 'Productivity' },
    { value: 'Remote Access', label: 'Remote Access' }
  ]

  return (
    <div className="">
      <Head>
        <title>Kasm Apps</title>
        <meta name="description" content="List of apps for Kasm Webspaces" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto'>
        <div className='w-full lg:w-1/2 p-16 bg-slate-300'>
          <h1 className='text-2xl font-medium mb-2'>Add Application</h1>
          <div className='flex flex-col'>
            <p className='mb-8 opacity-70'>This will help you generate the JSON file you need to upload to the App directory.</p>

            <label className='mb-2 font-medium'>Icon</label>
            <input type="file" name="icon" onChange={handleChange} className='mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400' />
            <p className='mb-6 opacity-70'>Select the image to use, image will be renamed when it's downloaded.</p>

            <label className='mb-2 font-medium'>Friendly Name</label>
            <input name="friendly_name" onChange={handleChange} className='mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400' />
            <p className='mb-6 opacity-70'>This is the name that will show for users</p>

            <label className='mb-2 font-medium'>Categories</label>
            <CreatableSelect
              name="categories"
              isMulti
              options={options}
              onChange={updateCategories}
              styles={customStyles}
            />
            <p className='mb-6 mt-2 opacity-70'>You can select from the available option or create new ones.</p>

            <label className='mb-2 font-medium'>Description</label>
            <input name="description" onChange={handleChange} className='mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400' />
            <p className='mb-6 opacity-70'>A short description about the application</p>

            <label className='mb-2 font-medium'>Docker Image</label>
            <input name="name" onChange={handleChange} className='mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400' />
            <p className='mb-6 opacity-70'>The docker image to use, i.e. <code className='text-xs p-1 px-2 rounded bg-white/40'>kasmweb/filezilla:develop</code></p>

          </div>
        </div>
        <div className='w-full lg:w-1/2 p-16 bg-slate-100'>
          <App app={application} icon={icon} />
          <pre className='my-8 overflow-y-auto text-xs'>{JSON.stringify(displayApplication(), null, 2)}</pre>
          <button onClick={downloadZip} className='p-4 relative z-10 px-5 bg-emerald-600 m-2 rounded items-center text-white/70 flex cursor-pointer'>Download</button>
        </div>
      </div>
    </div>
  )

}


function App({ app, icon }) {

  const [showDescription, setShowDescription] = useState(false);

  let srcBlob = null

  if (icon) {
    const blob = new Blob([icon.file])
    srcBlob = URL.createObjectURL(blob);
  }


  const installButton = () => {
    return <button className={"text-xs w-full p-4 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white"}>Install</button>
  }

  return (
    <div className={"rounded-xl w-full shadow max-w-xs relative overflow-hidden h-[160px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50"}>
      <div className={"absolute top-0 left-0 right-0 h-[320px] transition-all" + (showDescription ? ' -translate-y-1/2' : '')}>
        <div className={"h-[160px] p-4"}>
          <img className="h-[105px] absolute -left-6 -top-4" src={srcBlob} alt={app.friendly_name} />
          <div className="flex-col pl-20">
            <div className="font-bold">{app.friendly_name || 'Friendly Name'}</div>
            <div className="text-xs mb-2 flex gap-2">{process.env.name} </div>
            <div className="text-[10px] h-8 leading-normal">{app.categories.length > 0 ? app.categories.map(cat => (
              <span className="p-2 py-0 m-[1px] inline-block rounded bg-black/5">{cat}</span>
            )) : <span className="p-2 py-0 m-[1px] inline-block rounded bg-black/5">categories</span>}</div>
          </div>
          <div className="flex mt-1 gap-2 items-center">
            {installButton()}
            <div>
              <button className="flex w-8 h-8 bg-slate-100 justify-center rounded-full items-center" onClick={() => setShowDescription(true)}>
                  <svg style={{ height: '14px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" /></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="h-[160px] text-xs relative p-8">
          <button className="absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6" onClick={() => setShowDescription(false)}>
          <svg style={{ height: '14px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
          </button>
          {app.description}
        </div>
      </div>
    </div>
  )
}

