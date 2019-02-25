/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["doh","../br"],function(e,a){e.register("dojox.validate.tests.br",[{name:"isValidCnpj",runTest:function(e){e.assertTrue(a.isValidCnpj("75.730.657/0001-03"),"1 Checking ##.###.###/####-## format"),e.assertTrue(a.isValidCnpj("75730657/0001-03"),"1 Checking ########/####-## format"),e.assertTrue(a.isValidCnpj("757306570001-03"),"1 Checking ############-## format"),e.assertTrue(a.isValidCnpj("75730657000103"),"1 Checking ############## format"),e.assertTrue(a.isValidCnpj(75730657000103),"1 Checking numeric ############## format"),e.assertTrue(a.isValidCnpj("05.101.993/0001-01"),"2 Checking ##.###.###/####-## format"),e.assertTrue(a.isValidCnpj("05101993/0001-01"),"2 Checking ########/####-## format"),e.assertTrue(a.isValidCnpj("051019930001-01"),"2 Checking ############-## format"),e.assertTrue(a.isValidCnpj("05101993000101"),"2 Checking ############## format"),e.assertTrue(a.isValidCnpj(5101993000101),"2 Checking numeric ############## format"),e.assertTrue(a.isValidCnpj("79.577.986/0001-17"),"3 Checking ##.###.###/####-## format"),e.assertTrue(a.isValidCnpj("79577986/0001-17"),"3 Checking ########/####-## format"),e.assertTrue(a.isValidCnpj("795779860001-17"),"3 Checking ############-## format"),e.assertTrue(a.isValidCnpj("79577986000117"),"3 Checking ############## format"),e.assertTrue(a.isValidCnpj(79577986000117),"3 Checking numeric ############## format"),e.assertFalse(a.isValidCnpj("79.577.986/0001-18"),"4 Checking ##.###.###/####-## format"),e.assertFalse(a.isValidCnpj("79577986/0001-18"),"4 Checking ########/####-## format"),e.assertFalse(a.isValidCnpj("795779860001-18"),"4 Checking ############-## format"),e.assertFalse(a.isValidCnpj("79577986000118"),"4 Checking ############## format"),e.assertFalse(a.isValidCnpj(79577986000118),"4 Checking numeric ############## format"),e.assertFalse(a.isValidCnpj(0),"5 Checking numeric ############## format"),e.assertFalse(a.isValidCnpj("00000000000000"),"4 Checking numeric ############## format"),e.assertFalse(a.isValidCnpj("11111111111111"),"4 Checking numeric ############## format"),e.assertFalse(a.isValidCnpj("22222222222222"),"4 Checking numeric ############## format"),e.assertTrue(a.isValidCnpj("00.835.530/0001-50"),"5 Checking 00.835.530/0001-50 should be valid"),e.assertTrue(a.isValidCnpj("00835530000150"),"5 Checking 00835530000150 should be valid"),e.assertTrue(a.isValidCnpj(835530000150),"5 Checking numeric 00835530000150 should be valid")}},{name:"computeCnpjDv",runTest:function(e){e.assertEqual("03",a.computeCnpjDv("75.730.657/0001"),"1 Checking ##.###.###/#### format"),e.assertEqual("03",a.computeCnpjDv("75730657/0001"),"1 Checking ########/#### format"),e.assertEqual("03",a.computeCnpjDv("757306570001"),"1 Checking ############ format"),e.assertEqual("03",a.computeCnpjDv(757306570001),"1 Checking numeric ############ format"),e.assertEqual("01",a.computeCnpjDv("05.101.993/0001"),"2 Checking ##.###.###/#### format"),e.assertEqual("01",a.computeCnpjDv("05101993/0001"),"2 Checking ########/#### format"),e.assertEqual("01",a.computeCnpjDv("051019930001"),"2 Checking ############ format"),e.assertEqual("01",a.computeCnpjDv(51019930001),"2 Checking numeric ############ format"),e.assertEqual("17",a.computeCnpjDv("79.577.986/0001"),"3 Checking ##.###.###/#### format"),e.assertEqual("17",a.computeCnpjDv("79577986/0001"),"3 Checking ########/#### format"),e.assertEqual("17",a.computeCnpjDv("795779860001"),"3 Checking ############ format"),e.assertEqual("17",a.computeCnpjDv(795779860001),"3 Checking numeric ############ format"),e.assertEqual("50",a.computeCnpjDv("00.835.530/0001"),"4 Checking 00.835.530/0001"),e.assertEqual("50",a.computeCnpjDv("008355300001"),"4 Checking 008355300001"),e.assertEqual("50",a.computeCnpjDv(8355300001),"4 Checking numeric 008355300001")}},{name:"isValidCpf",runTest:function(e){e.assertTrue(a.isValidCpf("362.866.226-59"),"1 Checking ###.###.###-## format"),e.assertTrue(a.isValidCpf("362866226-59"),"1 Checking #########-## format"),e.assertTrue(a.isValidCpf("36286622659"),"1 Checking ########### format"),e.assertTrue(a.isValidCpf(36286622659),"1 Checking numeric ########### format"),e.assertTrue(a.isValidCpf("781.215.062-39"),"2 Checking ###.###.###-## format"),e.assertTrue(a.isValidCpf("781215062-39"),"2 Checking #########-## format"),e.assertTrue(a.isValidCpf("78121506239"),"2 Checking ########### format"),e.assertTrue(a.isValidCpf(78121506239),"2 Checking numeric ########### format"),e.assertTrue(a.isValidCpf("670.832.400-86"),"3 Checking ###.###.###-## format"),e.assertTrue(a.isValidCpf("670832400-86"),"3 Checking #########-## format"),e.assertTrue(a.isValidCpf("67083240086"),"3 Checking ########### format"),e.assertTrue(a.isValidCpf(67083240086),"3 Checking numeric ########### format"),e.assertTrue(a.isValidCpf("271.034.755-55"),"4 Checking ###.###.###-## format"),e.assertTrue(a.isValidCpf("271034755-55"),"4 Checking #########-## format"),e.assertTrue(a.isValidCpf("27103475555"),"4 Checking ########### format"),e.assertTrue(a.isValidCpf(27103475555),"4 Checking numeric ########### format"),e.assertTrue(a.isValidCpf("066.487.679-01"),"5 Checking 066.487.679-01 should be valid"),e.assertTrue(a.isValidCpf(6648767901),"5 Checking numeric 06648767901 should be valid")}},{name:"computeCpfDv",runTest:function(e){e.assertEqual("59",a.computeCpfDv("362.866.226"),"1 Checking ###.###.### format"),e.assertEqual("59",a.computeCpfDv("362866226"),"1 Checking ######### format"),e.assertEqual("59",a.computeCpfDv(362866226),"1 Checking numeric ######### format"),e.assertEqual("39",a.computeCpfDv("781.215.062"),"2 Checking ###.###.### format"),e.assertEqual("39",a.computeCpfDv("781215062"),"2 Checking ######### format"),e.assertEqual("39",a.computeCpfDv(781215062),"2 Checking numeric ######### format"),e.assertEqual("86",a.computeCpfDv("670.832.400"),"3 Checking ###.###.### format"),e.assertEqual("86",a.computeCpfDv("670832400"),"3 Checking ######### format"),e.assertEqual("86",a.computeCpfDv(670832400),"3 Checking numeric ######### format"),e.assertEqual("55",a.computeCpfDv("271.034.755"),"4 Checking ###.###.### format"),e.assertEqual("55",a.computeCpfDv("271034755"),"4 Checking ######### format"),e.assertEqual("55",a.computeCpfDv(271034755),"4 Checking numeric ######### format"),e.assertEqual("01",a.computeCpfDv("066.487.679"),"6 Checking 066.487.679-01"),e.assertEqual("01",a.computeCpfDv(66487679),"6 Checking numeric 06648767901")}}])});
//# sourceMappingURL=../../sourcemaps/validate/tests/br.js.map