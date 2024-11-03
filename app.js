   //map initialization
   var map = L.map('map').setView([42.3509,-71.1089], 12);

   //base osm layer 
   var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   osm.addTo(map)

   //osm layer education 
   var education =L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   education.addTo(map)

   //osm layer legal
   var legal =L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   legal.addTo(map)

   //osm layer housing/shelter
   var hs =L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   hs.addTo(map)

   //osm layer cash assistance
   var cash =L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   cash.addTo(map)

   //osm layer employment
   var employment =L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   employment.addTo(map)

   //osm layer healthcare
   var healthcare =L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   healthcare.addTo(map)

   //osm layer community education
   var communityEd =L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   communityEd.addTo(map)

   //osm layer mental health services
   var mentalHealth =L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   mentalHealth.addTo(map)

   // git merge mai n
   //osm layer case management
   var casemanage =L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   casemanage.addTo(map)

   //osm layer food
   var food =L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);

   food.addTo(map)

   var singleMarker = L.marker([42.3509,-71.1089]).addTo(map);
   var popup = singleMarker.bindPopup('This is Boston').openPopup();
   popup.addTo(map);

   var cities = L.layerGroup([singleMarker]);


   //all markers

   var ilc = L.marker([42.427132, -71.067299]).addTo(map);
   var popup1 = ilc.bindPopup('Immigrant Learning Center').openPopup();
   popup1.addTo(map);

   var ifsl = L.marker([42.268570, -71.093630]).addTo(map);
   var popup2 = ifsl.bindPopup('Immigrant Family Services Institute').openPopup();
   popup2.addTo(map);

   //var citywide = L.layerGroup([littleton, denver, aurora, golden]);
   var ric = L.marker([42.359620, -71.051800]).addTo(map);
   var popup3 = ric.bindPopup('Rian Immigrant Center').openPopup();
   popup3.addTo(map);

   var iine = L.marker([42.352290, -71.069200]).addTo(map);
   var popup4 = iine.bindPopup('International Institute of New England').openPopup();
   popup4.addTo(map);

   var abcd = L.marker([42.352921, -71.064056]).addTo(map);
   var popup5 = abcd.bindPopup('Action for Boston Community Development').openPopup();
   popup5.addTo(map);

   var ebcc = L.marker([42.35083689711354,-71.10820135493836]).addTo(map);
   var popup6 = ebcc.bindPopup('East Boston Community Council').openPopup();
   popup6.addTo(map);

   var ccb = L.marker([42.3388188,-71.0513548]).addTo(map);
   var popup7 = ccb.bindPopup('Catholic Charities Boston').openPopup();
   popup7.addTo(map);

   var jvs = L.marker([42.3552444,-71.0569304]).addTo(map);
   var popup8 = jvs.bindPopup('Jewish Vocational Service').openPopup();
   popup8.addTo(map);

   var mdbcc = L.marker([42.3552444,-71.0569304]).addTo(map);
   var popup9 = mdbcc.bindPopup('MassHire Downtown Boston Career Center').openPopup();
   popup9.addTo(map);

   var ebcsk = L.marker([42.3700576,-71.040192]).addTo(map);
   var popup10 = ebcsk.bindPopup('East Boston Community Soup Kitchen').openPopup();
   popup10.addTo(map);

   var rfc = L.marker([42.2988109,-71.1299112]).addTo(map);
   var popup11 = rfc.bindPopup('Roslindale Food Collective').openPopup();
   popup11.addTo(map);

   var fffpc = L.marker([42.308194,-71.0620443]).addTo(map);
   var popup12 = fffpc.bindPopup('Fair Foods: First Parish Church').openPopup();
   popup12.addTo(map);

   var pc = L.marker([42.3584799,-71.0618133]).addTo(map);
   var popup13 = pc.bindPopup('Project Citizenship').openPopup();
   popup13.addTo(map);

   var riac = L.marker([42.3304191,-71.0934607]).addTo(map);
   var popup14 = riac.bindPopup('Refugee & Immigrant Assistance Center (RIAC)').openPopup();
   popup14.addTo(map);

   var ori = L.marker([42.3528239,-71.0619767]).addTo(map);
   var popup15 = ori.bindPopup('Mass Office for Refugees and Immigrants (ORI)').openPopup();
   popup15.addTo(map);

   var kind = L.marker([42.3584799,-71.0618133]).addTo(map);
   var popup16 = kind.bindPopup('Kids in Need of Defense (KIND)').openPopup();
   popup16.addTo(map);

   var bhh = L.marker([42.3336453,-71.0727911]).addTo(map);
   var popup17 = bhh.bindPopup('Boston Healthcare for the Homeless').openPopup();
   popup17.addTo(map);

   var cp = L.marker([42.37535,-71.0384632]).addTo(map);
   var popup18 = cp.bindPopup('Centro Presente').openPopup();
   popup18.addTo(map);

   var bcrhh = L.marker([42.3344288,-71.0740944]).addTo(map);
   var popup19 = bcrhh.bindPopup('Boston Center for Refugee Health & Human Rights (program of Immigrant and Refugee Health Center at Boston Medical Center)').openPopup();
   popup19.addTo(map);

   var uscri = L.marker([38.85377502441406, -77.04931640625]).addTo(map);
   var popup20 = uscri.bindPopup('U.S. Committee for Refugee and Immigrants').openPopup();
   popup20.addTo(map);

   var maps = L.marker([42.3509439,-71.1460736]).addTo(map);
   var popup21 = maps.bindPopup('Massachusetts Alliance of Portuguese Speakers (MAPS)').openPopup();
   popup21.addTo(map);

   var gbfb = L.marker([42.3344051,-71.0658327]).addTo(map);
   var popup22 = gbfb.bindPopup('Greater Boston Food Bank').openPopup();
   popup22.addTo(map);

   var bwc = L.marker([42.3552369,-71.1324104]).addTo(map);
   var popup23 = bwc.bindPopup('Brazillian Worker Center').openPopup();
   popup23.addTo(map);

   var nh = L.marker([42.372349, -71.0383427]).addTo(map);
   var popup24 = nh.bindPopup('NeighborHealth').openPopup();
   popup24.addTo(map);

   var mira = L.marker([42.3640688,-71.0594262]).addTo(map);
   var popup25 = mira.bindPopup('Massachusetts Immigrant and Refugee Advocacy Coalition').openPopup();
   popup25.addTo(map);

   var csio = L.marker([42.3518221,-71.0573484]).addTo(map);
   var popup26 = csio.bindPopup('Center to Support Immigrant Organizing').openPopup();
   popup26.addTo(map);

   var gbls = L.marker([42.36417,-71.0604864]).addTo(map);
   var popup27 = gbls.bindPopup('Greater Boston Legal Services').openPopup();
   popup27.addTo(map);

   var ymca = L.marker([42.3509,-71.1089]).addTo(map);
   var popup28 = ymca.bindPopup('YMCA Mobile Markets').openPopup();
   popup28.addTo(map);

   var wirs = L.marker([42.3304191,-71.0934607]).addTo(map);
   var popup29 = wirs.bindPopup('Waldo Immigration and Refugee Services Inc').openPopup();
   popup29.addTo(map);

   var acedone = L.marker([42.3299294, -71.0908219]).addTo(map);
   var popup30 = acedone.bindPopup('African Community Economic Development of New England (ACEDONE)').openPopup();
   popup30.addTo(map);

   var pair = L.marker([42.365624,-71.0587343]).addTo(map);
   var popup31 = pair.bindPopup('Political Asylum Immigration Representation Project (PAIR)').openPopup();
   popup31.addTo(map);

   //marker groups
   var citywide = L.layerGroup([ilc, ifsi, ric, iine, abcd, ebcc, ccb, jvs, mdbcc, ebcsk, rfc, fffpc, pc, riac, ori, kind, bhh, cp, bcrhh, uscri, maps, gbfb, bwc, nh, mira, csio, gbls, ymca, wirs, acedone, pair]);

   //layer controller
   var overlayMaps = {
   "Citywide": ric,
   "Greater Boston": ilc,
   "Allston": ilc,
   "Back Bay": ilc,
   "Bay Village": ilc,
   "Beacon Hill": ilc,
   "Brighton": ilc,
   "Charlestown": ilc,
   };

   // map.removeLayer(singleMarker)

   L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);

var layerControl = L.control.layers(overlayMaps).addTo(map);
