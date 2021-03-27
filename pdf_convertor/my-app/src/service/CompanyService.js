import config from '../config'
class CompanyService {
    static async getCompanyList() {
        let response = await fetch(`${config.backendURL}/companies`)
        if (response.ok) {
            return await response.json();
        }
        return [];
    }
}
export default CompanyService;