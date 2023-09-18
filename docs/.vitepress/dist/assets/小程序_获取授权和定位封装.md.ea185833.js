import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b637c96f.js";const g=JSON.parse('{"title":"获取授权和定位封装","description":"","frontmatter":{"title":"获取授权和定位封装"},"headers":[],"relativePath":"小程序/获取授权和定位封装.md","filePath":"小程序/获取授权和定位封装.md","lastUpdated":1694660988000}'),p={name:"小程序/获取授权和定位封装.md"},o=l(`<h1 id="获取授权和定位封装" tabindex="-1">获取授权和定位封装 <a class="header-anchor" href="#获取授权和定位封装" aria-label="Permalink to &quot;获取授权和定位封装&quot;">​</a></h1><h2 id="common-js" tabindex="-1">common.js <a class="header-anchor" href="#common-js" aria-label="Permalink to &quot;common.js&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// common.js</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getLocation</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    wx.</span><span style="color:#B392F0;">getSetting</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// scope.userLocation  == undefined代表用户未授权且第一次登陆</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;检查地理位置信息是否授权&#39;</span><span style="color:#E1E4E8;">, res.authSetting[</span><span style="color:#9ECBFF;">&#39;scope.userLocation&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res.authSetting[</span><span style="color:#9ECBFF;">&#39;scope.userLocation&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">//如果用户是第一次登陆且未授权的情况，会直接弹窗请求授权</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 使用 getlocation 获取用户 经纬度位置</span></span>
<span class="line"><span style="color:#E1E4E8;">          wx.</span><span style="color:#B392F0;">getLocation</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//这里我们要指定定位类型是gcj02，因为不填默认是wgs84，定位精确度会相较于gcj02有几百到一千米的偏差，如果对精确度要求较高的请务必加上type:&#39;gcj02&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;gcj02&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            isHighAccuracy: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            highAccuracyExpireTime: </span><span style="color:#9ECBFF;">&#39;3100ms&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">//获取用户位置成功后，将会返回 latitude, longitude 两个字段，代表用户的经纬度位置</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(res);</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">// //给经纬度定义为全局变量，可以在全局调用</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">// app.latitude=res.latitude;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">// app.longitude=res.longitude;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">              console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">//用户已授权，但是获取地理位置失败，会弹框提示用户去系统设置中打开定位</span></span>
<span class="line"><span style="color:#E1E4E8;">              wx.</span><span style="color:#B392F0;">showModal</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                content: </span><span style="color:#9ECBFF;">&#39;请在手机系统设置中打开定位服务,重新进入小程序&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                confirmText: </span><span style="color:#9ECBFF;">&#39;确定&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">              })</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          })</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//小程序检测到用户不是第一次进入该页面,且未授权</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res.authSetting[</span><span style="color:#9ECBFF;">&#39;scope.userLocation&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> res.authSetting[</span><span style="color:#9ECBFF;">&#39;scope.userLocation&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          wx.</span><span style="color:#B392F0;">showModal</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&#39;是否授权当前位置&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            content: </span><span style="color:#9ECBFF;">&#39;需要获取您的地理位置，请确认授权，否则无法获取您所需数据&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">//如果点击取消则显示授权失败</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res.cancel) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                wx.</span><span style="color:#B392F0;">showToast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                  title: </span><span style="color:#9ECBFF;">&#39;授权失败&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  icon: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  duration: </span><span style="color:#79B8FF;">1000</span></span>
<span class="line"><span style="color:#E1E4E8;">                })</span></span>
<span class="line"><span style="color:#E1E4E8;">                wx.</span><span style="color:#B392F0;">openSetting</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">//如果点击确定会打开授权页请求二次授权</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res.confirm) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                wx.</span><span style="color:#B392F0;">openSetting</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">dataAu</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (dataAu.authSetting[</span><span style="color:#9ECBFF;">&quot;scope.userLocation&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      wx.</span><span style="color:#B392F0;">navigateBack</span><span style="color:#E1E4E8;">({delta: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">                      wx.</span><span style="color:#B392F0;">showToast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;授权成功&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: </span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        duration: </span><span style="color:#79B8FF;">1000</span></span>
<span class="line"><span style="color:#E1E4E8;">                      })</span></span>
<span class="line"><span style="color:#E1E4E8;">                      </span><span style="color:#6A737D;">//再次授权，调用getLocationt的API</span></span>
<span class="line"><span style="color:#E1E4E8;">                      wx.</span><span style="color:#B392F0;">getLocation</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                        type: </span><span style="color:#9ECBFF;">&#39;gcj02&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        isHighAccuracy: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        highAccuracyExpireTime: </span><span style="color:#9ECBFF;">&#39;3100ms&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                          </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(res);</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                          </span><span style="color:#6A737D;">//用户已授权，但是获取地理位置失败，提示用户去系统设置中打开定位</span></span>
<span class="line"><span style="color:#E1E4E8;">                          wx.</span><span style="color:#B392F0;">showModal</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                            title: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            content: </span><span style="color:#9ECBFF;">&#39;请在系统设置中打开定位服务,否则无法正常使用&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            confirmText: </span><span style="color:#9ECBFF;">&#39;确定&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">                          })</span></span>
<span class="line"><span style="color:#E1E4E8;">                        }</span></span>
<span class="line"><span style="color:#E1E4E8;">                      })</span></span>
<span class="line"><span style="color:#E1E4E8;">                    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      wx.</span><span style="color:#B392F0;">showToast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;授权失败&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        duration: </span><span style="color:#79B8FF;">1000</span></span>
<span class="line"><span style="color:#E1E4E8;">                      })</span></span>
<span class="line"><span style="color:#E1E4E8;">                      wx.</span><span style="color:#B392F0;">openSetting</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                  }</span></span>
<span class="line"><span style="color:#E1E4E8;">                })</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          })</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res.authSetting[</span><span style="color:#9ECBFF;">&#39;scope.userLocation&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">//授权后默认加载，直接获取定位</span></span>
<span class="line"><span style="color:#E1E4E8;">          wx.</span><span style="color:#B392F0;">getLocation</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;gcj02&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(res);</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err.errMsg </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;getLocation:fail 频繁调用会增加电量损耗，可考虑使用 wx.onLocationChange 监听地理位置变化&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">//用户已授权，但是获取地理位置失败，提示用户去系统设置中打开定位</span></span>
<span class="line"><span style="color:#E1E4E8;">                wx.</span><span style="color:#B392F0;">showModal</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                  title: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  content: </span><span style="color:#9ECBFF;">&#39;请在手机系统设置中打开定位服务,重新进入小程序&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  confirmText: </span><span style="color:#9ECBFF;">&#39;确定&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// 未授权强制退出</span></span>
<span class="line"><span style="color:#E1E4E8;">                    wx.</span><span style="color:#B392F0;">exitMiniProgram</span><span style="color:#E1E4E8;">({})</span></span>
<span class="line"><span style="color:#E1E4E8;">                  }</span></span>
<span class="line"><span style="color:#E1E4E8;">                })</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          })</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">common</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  getLocation,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> common;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// common.js</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getLocation</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">,</span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    wx.</span><span style="color:#6F42C1;">getSetting</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: </span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// scope.userLocation  == undefined代表用户未授权且第一次登陆</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;检查地理位置信息是否授权&#39;</span><span style="color:#24292E;">, res.authSetting[</span><span style="color:#032F62;">&#39;scope.userLocation&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.authSetting[</span><span style="color:#032F62;">&#39;scope.userLocation&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">//如果用户是第一次登陆且未授权的情况，会直接弹窗请求授权</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 使用 getlocation 获取用户 经纬度位置</span></span>
<span class="line"><span style="color:#24292E;">          wx.</span><span style="color:#6F42C1;">getLocation</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//这里我们要指定定位类型是gcj02，因为不填默认是wgs84，定位精确度会相较于gcj02有几百到一千米的偏差，如果对精确度要求较高的请务必加上type:&#39;gcj02&#39;</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;gcj02&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            isHighAccuracy: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            highAccuracyExpireTime: </span><span style="color:#032F62;">&#39;3100ms&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: </span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6A737D;">//获取用户位置成功后，将会返回 latitude, longitude 两个字段，代表用户的经纬度位置</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(res);</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6A737D;">// //给经纬度定义为全局变量，可以在全局调用</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6A737D;">// app.latitude=res.latitude;</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6A737D;">// app.longitude=res.longitude;</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;">: </span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">              console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6A737D;">//用户已授权，但是获取地理位置失败，会弹框提示用户去系统设置中打开定位</span></span>
<span class="line"><span style="color:#24292E;">              wx.</span><span style="color:#6F42C1;">showModal</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                content: </span><span style="color:#032F62;">&#39;请在手机系统设置中打开定位服务,重新进入小程序&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                confirmText: </span><span style="color:#032F62;">&#39;确定&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: </span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">              })</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          })</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//小程序检测到用户不是第一次进入该页面,且未授权</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.authSetting[</span><span style="color:#032F62;">&#39;scope.userLocation&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> res.authSetting[</span><span style="color:#032F62;">&#39;scope.userLocation&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          wx.</span><span style="color:#6F42C1;">showModal</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            title: </span><span style="color:#032F62;">&#39;是否授权当前位置&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            content: </span><span style="color:#032F62;">&#39;需要获取您的地理位置，请确认授权，否则无法获取您所需数据&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: </span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6A737D;">//如果点击取消则显示授权失败</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.cancel) {</span></span>
<span class="line"><span style="color:#24292E;">                wx.</span><span style="color:#6F42C1;">showToast</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                  title: </span><span style="color:#032F62;">&#39;授权失败&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  icon: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  duration: </span><span style="color:#005CC5;">1000</span></span>
<span class="line"><span style="color:#24292E;">                })</span></span>
<span class="line"><span style="color:#24292E;">                wx.</span><span style="color:#6F42C1;">openSetting</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6A737D;">//如果点击确定会打开授权页请求二次授权</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.confirm) {</span></span>
<span class="line"><span style="color:#24292E;">                wx.</span><span style="color:#6F42C1;">openSetting</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: </span><span style="color:#E36209;">dataAu</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (dataAu.authSetting[</span><span style="color:#032F62;">&quot;scope.userLocation&quot;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                      wx.</span><span style="color:#6F42C1;">navigateBack</span><span style="color:#24292E;">({delta: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">                      wx.</span><span style="color:#6F42C1;">showToast</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;授权成功&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: </span><span style="color:#032F62;">&#39;success&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        duration: </span><span style="color:#005CC5;">1000</span></span>
<span class="line"><span style="color:#24292E;">                      })</span></span>
<span class="line"><span style="color:#24292E;">                      </span><span style="color:#6A737D;">//再次授权，调用getLocationt的API</span></span>
<span class="line"><span style="color:#24292E;">                      wx.</span><span style="color:#6F42C1;">getLocation</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                        type: </span><span style="color:#032F62;">&#39;gcj02&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        isHighAccuracy: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        highAccuracyExpireTime: </span><span style="color:#032F62;">&#39;3100ms&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: </span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                          </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(res);</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;">: </span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                          </span><span style="color:#6A737D;">//用户已授权，但是获取地理位置失败，提示用户去系统设置中打开定位</span></span>
<span class="line"><span style="color:#24292E;">                          wx.</span><span style="color:#6F42C1;">showModal</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                            title: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            content: </span><span style="color:#032F62;">&#39;请在系统设置中打开定位服务,否则无法正常使用&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            confirmText: </span><span style="color:#032F62;">&#39;确定&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: </span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">                          })</span></span>
<span class="line"><span style="color:#24292E;">                        }</span></span>
<span class="line"><span style="color:#24292E;">                      })</span></span>
<span class="line"><span style="color:#24292E;">                    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                      wx.</span><span style="color:#6F42C1;">showToast</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;授权失败&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        duration: </span><span style="color:#005CC5;">1000</span></span>
<span class="line"><span style="color:#24292E;">                      })</span></span>
<span class="line"><span style="color:#24292E;">                      wx.</span><span style="color:#6F42C1;">openSetting</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                  }</span></span>
<span class="line"><span style="color:#24292E;">                })</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          })</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.authSetting[</span><span style="color:#032F62;">&#39;scope.userLocation&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">//授权后默认加载，直接获取定位</span></span>
<span class="line"><span style="color:#24292E;">          wx.</span><span style="color:#6F42C1;">getLocation</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;gcj02&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: </span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(res);</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;">(</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err.errMsg </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;getLocation:fail 频繁调用会增加电量损耗，可考虑使用 wx.onLocationChange 监听地理位置变化&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">//用户已授权，但是获取地理位置失败，提示用户去系统设置中打开定位</span></span>
<span class="line"><span style="color:#24292E;">                wx.</span><span style="color:#6F42C1;">showModal</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                  title: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  content: </span><span style="color:#032F62;">&#39;请在手机系统设置中打开定位服务,重新进入小程序&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  confirmText: </span><span style="color:#032F62;">&#39;确定&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: </span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// 未授权强制退出</span></span>
<span class="line"><span style="color:#24292E;">                    wx.</span><span style="color:#6F42C1;">exitMiniProgram</span><span style="color:#24292E;">({})</span></span>
<span class="line"><span style="color:#24292E;">                  }</span></span>
<span class="line"><span style="color:#24292E;">                })</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          })</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">common</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  getLocation,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> common;</span></span></code></pre></div>`,3),e=[o];function c(t,E,r,y,i,F){return n(),a("div",null,e)}const A=s(p,[["render",c]]);export{g as __pageData,A as default};
