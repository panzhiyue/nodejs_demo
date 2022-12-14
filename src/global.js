//表示当前执行脚本所在的目录。
///sandbox/src
console.log(__dirname);

//表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
///sandbox/src/global.js
console.log(__filename);

/**
 * process {
  version: 'v14.19.3',
  versions: {
    node: '14.19.3',
    v8: '8.4.371.23-node.87',
    uv: '1.42.0',
    zlib: '1.2.11',
    brotli: '1.0.9',
    ares: '1.18.1',
    modules: '83',
    nghttp2: '1.42.0',
    napi: '8',
    llhttp: '2.1.4',
    openssl: '1.1.1o',
    cldr: '40.0',
    icu: '70.1',
    tz: '2021a3',
    unicode: '14.0'
  },
  arch: 'x64',
  platform: 'linux',
  release: {
    name: 'node',
    lts: 'Fermium',
    sourceUrl: 'https://nodejs.org/download/release/v14.19.3/node-v14.19.3.tar.gz',
    headersUrl: 'https://nodejs.org/download/release/v14.19.3/node-v14.19.3-headers.tar.gz'
  },
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [
    'Internal Binding native_module',
    'Internal Binding errors',
    'NativeModule internal/errors',
    'Internal Binding config',
    'Internal Binding url',
    'Internal Binding constants',
    'Internal Binding util',
    'Internal Binding types',
    'NativeModule internal/util',
    'NativeModule internal/util/types',
    'NativeModule internal/assert',
    'Internal Binding icu',
    'NativeModule internal/util/inspect',
    'NativeModule internal/validators',
    'NativeModule events',
    'Internal Binding buffer',
    'Internal Binding string_decoder',
    'NativeModule internal/buffer',
    'NativeModule internal/encoding',
    'Internal Binding symbols',
    'Internal Binding messaging',
    'NativeModule internal/worker/js_transferable',
    'NativeModule internal/blob',
    'NativeModule buffer',
    'NativeModule internal/modules/esm/handle_process_exit',
    'NativeModule internal/process/per_thread',
    'Internal Binding process_methods',
    'Internal Binding credentials',
    'Internal Binding async_wrap',
    'Internal Binding task_queue',
    'NativeModule internal/async_hooks',
    'NativeModule internal/process/promises',
    'NativeModule internal/fixed_queue',
    'NativeModule async_hooks',
    'NativeModule internal/process/task_queues',
    'Internal Binding trace_events',
    'NativeModule internal/constants',
    'NativeModule internal/console/constructor',
    'NativeModule internal/console/global',
    'NativeModule internal/util/inspector',
    'Internal Binding inspector',
    'NativeModule internal/querystring',
    'NativeModule path',
    'NativeModule internal/url',
    'Internal Binding timers',
    'NativeModule internal/linkedlist',
    'NativeModule internal/priority_queue',
    'NativeModule internal/util/debuglog',
    'NativeModule internal/timers',
    'NativeModule timers',
    'NativeModule internal/process/execution',
    'NativeModule internal/process/warning',
    'NativeModule internal/process/signal',
    'Internal Binding options',
    'NativeModule internal/options',
    'NativeModule internal/bootstrap/pre_execution',
    'NativeModule internal/inspector_async_hook',
    'Internal Binding report',
    'NativeModule internal/process/report',
    'Internal Binding fs',
    'NativeModule internal/fs/utils',
    'Internal Binding fs_dir',
    'NativeModule internal/fs/dir',
    'NativeModule fs',
    'NativeModule internal/util/iterable_weak_map',
    'NativeModule internal/modules/cjs/helpers',
    'NativeModule internal/source_map/source_map_cache',
    'Internal Binding contextify',
    'NativeModule vm',
    'NativeModule internal/idna',
    'NativeModule url',
    'NativeModule internal/modules/package_json_reader',
    'Internal Binding module_wrap',
    'NativeModule internal/modules/esm/module_job',
    'NativeModule internal/modules/esm/module_map',
    'NativeModule internal/modules/esm/get_format',
    'NativeModule internal/modules/esm/resolve',
    'NativeModule internal/fs/rimraf',
    'Internal Binding fs_event_wrap',
    'Internal Binding uv',
    'NativeModule internal/fs/watchers',
    'NativeModule internal/streams/utils',
    'NativeModule internal/fs/promises',
    'NativeModule internal/modules/esm/get_source',
    'NativeModule internal/modules/esm/transform_source',
    'NativeModule internal/modules/esm/create_dynamic_module',
    'NativeModule internal/modules/esm/translators',
    'NativeModule internal/modules/esm/loader',
    'NativeModule internal/vm/module',
    'NativeModule internal/process/esm_loader',
    'NativeModule internal/modules/cjs/loader',
    'NativeModule internal/modules/run_main',
    'NativeModule internal/streams/destroy',
    'NativeModule internal/streams/pipeline',
    'NativeModule internal/streams/end-of-stream',
    'NativeModule internal/streams/legacy',
    'NativeModule internal/streams/buffer_list',
    'NativeModule internal/streams/state',
    'NativeModule internal/streams/readable',
    'NativeModule internal/streams/writable',
    ... 15 more items
  ],
  binding: [Function: binding],
  _linkedBinding: [Function: _linkedBinding],
  _events: [Object: null prototype] {
    newListener: [Function: startListeningIfSignal],
    removeListener: [Function: stopListeningIfSignal],
    warning: [Function: onWarning],
    SIGWINCH: [Function (anonymous)]
  },
  _eventsCount: 4,
  _maxListeners: undefined,
  domain: null,
  _exiting: false,
  config: {
    target_defaults: {
      cflags: [],
      default_configuration: 'Release',
      defines: [],
      include_dirs: [],
      libraries: []
    },
    variables: {
      asan: 0,
      build_v8_with_gn: false,
      coverage: false,
      dcheck_always_on: 0,
      debug_nghttp2: false,
      debug_node: false,
      enable_lto: false,
      enable_pgo_generate: false,
      enable_pgo_use: false,
      error_on_warn: false,
      force_dynamic_crt: 0,
      gas_version: '2.30',
      host_arch: 'x64',
      icu_data_in: '../../deps/icu-tmp/icudt70l.dat',
      icu_endianness: 'l',
      icu_gyp_path: 'tools/icu/icu-generic.gyp',
      icu_path: 'deps/icu-small',
      icu_small: false,
      icu_ver_major: '70',
      is_debug: 0,
      llvm_version: '0.0',
      napi_build_version: '8',
      node_byteorder: 'little',
      node_debug_lib: false,
      node_enable_d8: false,
      node_install_corepack: true,
      node_install_npm: true,
      node_library_files: [Array],
      node_module_version: 83,
      node_no_browser_globals: false,
      node_prefix: '/',
      node_release_urlbase: 'https://nodejs.org/download/release/',
      node_section_ordering_info: '',
      node_shared: false,
      node_shared_brotli: false,
      node_shared_cares: false,
      node_shared_http_parser: false,
      node_shared_libuv: false,
      node_shared_nghttp2: false,
      node_shared_openssl: false,
      node_shared_zlib: false,
      node_tag: '',
      node_target_type: 'executable',
      node_use_bundled_v8: true,
      node_use_dtrace: false,
      node_use_etw: false,
      node_use_node_code_cache: true,
      node_use_node_snapshot: true,
      node_use_openssl: true,
      node_use_v8_platform: true,
      node_with_ltcg: false,
      node_without_node_options: false,
      openssl_fips: '',
      openssl_is_fips: false,
      ossfuzz: false,
      shlib_suffix: 'so.83',
      target_arch: 'x64',
      v8_enable_31bit_smis_on_64bit_arch: 0,
      v8_enable_gdbjit: 0,
      v8_enable_i18n_support: 1,
      v8_enable_inspector: 1,
      v8_enable_lite_mode: 0,
      v8_enable_object_print: 1,
      v8_enable_pointer_compression: 0,
      v8_no_strict_aliasing: 1,
      v8_optimized_debug: 1,
      v8_promise_internal_field_count: 1,
      v8_random_seed: 0,
      v8_trace_maps: 0,
      v8_use_siphash: 1,
      want_separate_host_toolset: 0
    }
  },
  dlopen: [Function: dlopen],
  uptime: [Function: uptime],
  _getActiveRequests: [Function: _getActiveRequests],
  _getActiveHandles: [Function: _getActiveHandles],
  reallyExit: [Function: reallyExit],
  _kill: [Function: _kill],
  hrtime: [Function: hrtime] { bigint: [Function: hrtimeBigInt] },
  cpuUsage: [Function: cpuUsage],
  resourceUsage: [Function: resourceUsage],
  memoryUsage: [Function: memoryUsage] { rss: [Function: rss] },
  kill: [Function: kill],
  exit: [Function: exit],
  openStdin: [Function (anonymous)],
  getuid: [Function: getuid],
  geteuid: [Function: geteuid],
  getgid: [Function: getgid],
  getegid: [Function: getegid],
  getgroups: [Function: getgroups],
  allowedNodeEnvironmentFlags: [Getter/Setter],
  assert: [Function: deprecated],
  features: {
    inspector: true,
    debug: false,
    uv: true,
    ipv6: true,
    tls_alpn: true,
    tls_sni: true,
    tls_ocsp: true,
    tls: true,
    cached_builtins: true
  },
  _fatalException: [Function (anonymous)],
  setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  _tickCallback: [Function: runNextTicks],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function: wrappedChdir],
  cwd: [Function: wrappedCwd],
  initgroups: [Function: initgroups],
  setgroups: [Function: setgroups],
  setegid: [Function (anonymous)],
  seteuid: [Function (anonymous)],
  setgid: [Function (anonymous)],
  setuid: [Function (anonymous)],
  env: {
    KUBERNETES_SERVICE_PORT_HTTPS: '443',
    KUBERNETES_SERVICE_PORT: '443',
    NVM_INC: '/home/sandbox/.nvm/versions/node/v14.19.3/include/node',
    NODE_14_VERSION: '14.19.3',
    HOSTNAME: 'sse-sandbox-u7ne3c',
    YARN_VERSION: '1.22.5',
    PWD: '/sandbox',
    SSE_MANAGER_SERVICE_PORT: '80',
    HOME: '/home/sandbox',
    KUBERNETES_PORT_443_TCP: 'tcp://10.96.0.1:443',
    LS_COLORS: 'rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:',
    SSE_MANAGER_SERVICE_HOST: '10.96.5.221',
    NODE_16_VERSION: '16.15.1',
    NODE_12_VERSION: '12.22.12',
    NVM_DIR: '/home/sandbox/.nvm',
    SSE_MANAGER_PORT_80_TCP: 'tcp://10.96.5.221:80',
    TERM: 'xterm',
    SSE_MANAGER_PORT_80_TCP_ADDR: '10.96.5.221',
    SHLVL: '1',
    NVM_CD_FLAGS: '',
    KUBERNETES_PORT_443_TCP_PROTO: 'tcp',
    SSE_MANAGER_PORT_80_TCP_PROTO: 'tcp',
    KUBERNETES_PORT_443_TCP_ADDR: '10.96.0.1',
    KUBERNETES_SERVICE_HOST: '10.96.0.1',
    KUBERNETES_PORT: 'tcp://10.96.0.1:443',
    KUBERNETES_PORT_443_TCP_PORT: '443',
    NODE_18_VERSION: '18.3.0',
    SSE_MANAGER_PORT: 'tcp://10.96.5.221:80',
    PATH: '/home/sandbox/.nvm/versions/node/v14.19.3/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games',
    NVM_BIN: '/home/sandbox/.nvm/versions/node/v14.19.3/bin',
    NODE_VERSION: '14',
    SSE_MANAGER_PORT_80_TCP_PORT: '80',
    _: '/home/sandbox/.nvm/versions/node/v14.19.3/bin/node'
  },
  title: 'node',
  argv: [
    '/home/sandbox/.nvm/versions/node/v14.19.3/bin/node',
    '/sandbox/src/global.js'
  ],
  execArgv: [],
  pid: 2318,
  ppid: 1526,
  execPath: '/home/sandbox/.nvm/versions/node/v14.19.3/bin/node',
  debugPort: 9229,
  argv0: 'node',
  _preload_modules: [],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  mainModule: Module {
    id: '.',
    path: '/sandbox/src',
    exports: {},
    parent: null,
    filename: '/sandbox/src/global.js',
    loaded: false,
    children: [],
    paths: [
      '/sandbox/src/node_modules',
      '/sandbox/node_modules',
      '/node_modules'
    ]
  },
  [Symbol(kCapture)]: false
}
 */
console.log(process);
