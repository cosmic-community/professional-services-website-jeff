import { cosmic } from '@/lib/cosmic';
import { TeamMember } from '@/types';

async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['title', 'slug', 'metadata'])
      .depth(1);
    return response.objects;
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    throw error;
  }
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented professionals who make our success possible.
          </p>
        </div>

        {teamMembers.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {member.metadata.photo && (
                  <img
                    src={`${member.metadata.photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                    alt={member.metadata.photo.alt || member.title}
                    width="300"
                    height="300"
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.title}
                  </h3>
                  {member.metadata.position && (
                    <p className="text-blue-600 font-medium mb-3">
                      {member.metadata.position}
                    </p>
                  )}
                  {member.metadata.bio && (
                    <p className="text-gray-600 text-sm mb-4">
                      {member.metadata.bio}
                    </p>
                  )}
                  {member.metadata.social_links && (
                    <div className="flex space-x-3">
                      {member.metadata.social_links.linkedin && (
                        <a
                          href={member.metadata.social_links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.metadata.social_links.twitter && (
                        <a
                          href={member.metadata.social_links.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-600"
                        >
                          Twitter
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No team members found.</p>
          </div>
        )}
      </div>
    </div>
  );
}